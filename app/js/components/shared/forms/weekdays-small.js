var React = require('react');
var ReactBootstrap = require('react-bootstrap')
    , Input = ReactBootstrap.Input;


var WeekDaysSmall = React.createClass({

    propTypes: {
        getLinkState: React.PropTypes.func.isRequired,
        namePrefix: React.PropTypes.string.isRequired
    },


    render: function () {

        return (
        <Input type='select'
               id={this.props.namePrefix + "WeekDay"}
               valueLink={this.props.getLinkState(this.props.namePrefix + "WeekDay")}>
            <option value=''></option>
            <option value='Monday'>Monday</option>
            <option value='Tuesday'>Tuesday</option>
            <option value='Wednesday'>Wednesday</option>
            <option value='Thursday'>Thursday</option>
            <option value='Friday'>Friday</option>
        </Input>);
    }
});

module.exports = WeekDaysSmall;