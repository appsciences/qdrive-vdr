let React = require('react'),
	SortableMixin = require('sortablejs/react-sortable-mixin');

let ReactBootstrap = require('react-bootstrap'),
	Label = ReactBootstrap.Label;

const ListHolder = React.createClass({
	propTypes: {
		items: React.PropTypes.array.isRequired,
        disableDnd: React.PropTypes.bool,
        onDnd: React.PropTypes.func
    },

    //mixins: [SortableMixin],

    componentWillMount() {
        // disabling SortableJS
        this.sortableOptions = {disabled: this.props.disableDnd};
    },

    handleSort(event) {
        this.props.onDnd(event.newIndex, event.oldIndex);
    },

    render() {
        let getItemRow = (item) => (
            <div>
                <div className="action">{item.action}</div>
                <div className="info">
                    <span style={item.style} className="title">
                        {item.name}
                    </span>
                    <span>
                        {
                            item.labels &&
                            item.labels.map((label, i) =>
                                <Label key={i} bsStyle={label.style} style={{marginRight: "5px"}}>
                                    {label.text}
                                </Label>
                            )
                        }
                    </span>
                    <div className="info">{item.responsibility}</div>
                </div>
            </div>
        );

        let items = this.props.items.map((item, i) => {
            if (item.type === 'group') {
                return (
                    <li key={i} className="list-group-item clearfix">
                        <div className="action">{item.action}</div>
                        <div className="group-name">{item.name}</div>
                        {item.subItems.map((subItem, i) => {
                            return (
                                <div key={i} className="group">
                                    {getItemRow(subItem)}
                                </div>
                            );
                        })}
                    </li>
                );
            } else {
                return (
                    <li key={i} className="list-group-item clearfix">
                        {getItemRow(item)}
                    </li>
                );
            }
        });

        return <ul className="list-group documentation-list-holder">{items}</ul>;
    }
});

module.exports = ListHolder;
