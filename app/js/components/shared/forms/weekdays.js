var React = require('react');
var Select = require('react-select');

var WeekDays = React.createClass({

    propTypes: {
        getLinkState: React.PropTypes.func.isRequired,
        namePrefix: React.PropTypes.string.isRequired
    },

    render: function () {

        return (
            <div>
                <Select
                    options = {[
                        {label:'Monday', value:'monday'},
                        {label:'Tuesday', value:'monday'},
                        {label:'Wednesday', value:'monday'},
                        {label:'Thursday', value:'monday'},
                        {label:'Friday', value:'monday'}
                    ]}
                    value={this.props.getLinkState(this.props.namePrefix + "WeekDay").value}
                    onChange={this.props.getLinkState(this.props.namePrefix + "WeekDay", true).requestChange}
                />
            </div>
        );
    }
});

module.exports = WeekDays;