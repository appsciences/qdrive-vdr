const React = require('react');

const Input = require('react-bootstrap').Input;

const Search = require('../layout/bootstrap-search'),
    corporateStatusApi = require('../api/corporate-status-api');

const CompanyNameSearch = React.createClass({

    searchByName(keyPhrase, callback) {
        this.props.valueLink.requestChange(keyPhrase); // change on Search input

        corporateStatusApi.searchByName(keyPhrase)
            .then((searchResult) => {
                callback(searchResult.map(item => ({
                    label: item['current_entity_name'], data: item
                })));
            });
    },

    render() {
        return (
            <div>
                <div style={{display: this.props.disabled ? 'block' : 'none'}}>
                    <Input valueLink={this.props.valueLink}
                           type="text" label={this.props.label} />
                </div>
                <Search
                    label={this.props.label}
                    hide={this.props.disabled}
                    initialValue={this.props.valueLink.value}
                    onSelect={(item) => this.props.valueLink.requestChange(item['current_entity_name'])}
                    onChange={this.props.valueLink.requestChange}
                    loadResult={this.searchByName}
                />
            </div>
        );
    }
});

module.exports = CompanyNameSearch;