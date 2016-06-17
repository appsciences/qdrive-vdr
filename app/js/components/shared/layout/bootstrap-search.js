const React = require('react');

const Search = React.createClass({
    propTypes: {
        loadResult: React.PropTypes.func.isRequired,
        onSelect: React.PropTypes.func,
        onChange: React.PropTypes.func,
        placeholder: React.PropTypes.string,
        initialValue: React.PropTypes.string,
        label: React.PropTypes.string,
        notEditable: React.PropTypes.bool,
        hide: React.PropTypes.bool
    },

    getInitialState() {
        return {
            searchResult: [],
            isLoading: false,
            showResults: false
        }
    },

    componentDidMount() {
        this.updateInitialValue(this.props);
    },

    componentWillReceiveProps(nextProps) {
        if (this.props.hide && !nextProps.hide) {
            this.updateInitialValue(nextProps);
        }
    },

    updateInitialValue(props) {
        const {initialValue, notEditable} = props;

        if (initialValue) {
            notEditable ? this.refs['searchDiv'].innerHTML = initialValue
                : this.refs['searchInput'].value = initialValue;

            this.searchRequest(initialValue, true)
        }
    },

    searchRequest(keyPhrase, initialSearch) {
        this.props.onChange && this.props.onChange(keyPhrase);

        if (!keyPhrase) {
            this.ignoreResult = true;

            this.setState({
                searchResult: [],
                showResults: false
            });
            return;
        }

        clearTimeout(this.searchTimeoutId);

        this.searchTimeoutId = setTimeout(() => {
            this.ignoreResult = false;
            this.setState({isLoading: true});

            this.props.loadResult(keyPhrase, (searchResult) => {
                this.setState({isLoading: false});

                if (typeof searchResult === 'string') {
                    this.setState({
                        searchResult,
                        showResults: true
                    });

                    return;
                }

                if (initialSearch && searchResult.length === 1 && keyPhrase === searchResult[0].label) {
                    this.props.onSelect(searchResult[0].data);
                    return;
                }

                if (this.ignoreResult) return;

                this.focusIndex = 0;

                this.setState({
                    searchResult,
                    showResults: true
                });
            });
        }, 500);
    },

    inputFocusHandler() {
        if (this.state.searchResult.length) {
            this.setState({showResults: true});
        }
    },

    inputBlurHandler() {
        this.setState({
            showResults: false
        });

        this.refs['searchInput'].value = this.state.lastSelected || "";
    },

    itemClickHandler(item) {
        this.props.notEditable ? this.refs['searchDiv'].innerHTML = item.label
            : this.refs['searchInput'].value = item.label;

        this.setState({
            showResults: false,
            lastSelected: item.label
        });

        this.props.onSelect(item.data);
    },

    handleKeyDown(event) {
        switch (event.key) {
            case 'ArrowUp':
                this.focusPrev();
                break;
            case 'ArrowDown':
                this.focusNext();
                break;
            case 'Enter':
                this.selectFocused();

        }
    },

    focusNext() {
        let items = document.querySelectorAll('.bootstrap-search-item');

        if (this.focusIndex + 1 >= items.length) return;

        if (this.focusIndex != -1) {
            items[this.focusIndex].classList.remove('focused');
        }

        items[++this.focusIndex].classList.add('focused');

        this.scrollToFocused();
    },

    focusPrev() {
        let items = document.querySelectorAll('.bootstrap-search-item');

        if (this.focusIndex === 0) return;

        items[this.focusIndex].classList.remove('focused');
        items[--this.focusIndex].classList.add('focused');

        this.scrollToFocused();
    },

    scrollToFocused() {
        let item = document.querySelector('.bootstrap-search-item.focused');
        let holder = document.querySelector('.bootstrap-search-results');

        if (item.offsetTop >= holder.scrollTop - item.offsetHeight) {
            holder.scrollTop = item.offsetTop - 100;
        }
    },

    focusHovered(index) {
        let items = document.querySelectorAll('.bootstrap-search-item');

        items[this.focusIndex].classList.remove('focused');
        items[index].classList.add('focused');

        this.focusIndex = index;
    },

    selectFocused() {
        if (this.focusIndex !== -1) {
            this.itemClickHandler(this.state.searchResult[this.focusIndex]);
        }
    },

    render() {
        const inputClassName = "bootstrap-search-input"  +
            ((this.state.showResults && this.state.searchResult.length) ? ' top-radius' : '');

        return (
            <div className="bootstrap-search" style={{display: this.props.hide ? 'none' : 'block'}}>
                <div className="form-group">
                    {this.state.isLoading && <div className="bootstrap-search-loading"></div>}
                    <label className="control-label">
                        {this.props.label}
                    </label>
                    {
                        this.props.notEditable ?
                            <div ref="searchDiv"
                                 className={inputClassName}>
                                {this.props.initialValue}
                            </div>
                            :
                            <input
                                ref="searchInput"
                                label={this.props.label}
                                onFocus={this.inputFocusHandler}
                                onKeyDown={this.handleKeyDown}
                                onBlur={this.inputBlurHandler}
                                onChange={(e) => this.searchRequest(e.target.value)}
                                className={inputClassName}
                                placeholder={this.props.placeholder}
                            />
                    }
                </div>
                {(this.state.showResults && this.state.searchResult.length !== 0) &&
                    <div className="bootstrap-search-results">
                        {
                            Array.isArray(this.state.searchResult) ?
                                this.state.searchResult.map((item, index) => (
                                    <div className={'bootstrap-search-item' + (this.focusIndex === index ? ' focused' : '')}
                                         key={index}
                                         onMouseDown={() => this.itemClickHandler(item)}
                                         onMouseOver={() => this.focusHovered(index)}
                                         tabIndex="-1"
                                    >
                                        {item.label}
                                    </div>
                                ))
                                :
                                // error message
                                <div className="bootstrap-search-item">
                                    <b><i>{this.state.searchResult}</i></b>
                                </div>
                        }
                    </div>
                }
            </div>
        );
    }
});

module.exports = Search;