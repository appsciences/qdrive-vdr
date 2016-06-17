var React = require('react');

var ReactBootstrap = require('react-bootstrap')
    , Button = ReactBootstrap.Button;

var YesNoButtons = React.createClass ({
    propTypes: {
        onClick: React.PropTypes.func.isRequired,
        value: React.PropTypes.bool.isRequired
    },

    render: function() {


        return (

            <span id={this.props.id}>
                &nbsp;&nbsp;
                <Button style={{marginBottom:10}} value={true} onClick={this.props.onClick} active={this.props.value}>Yes</Button>
                <Button style={{marginBottom:10}} value={false} onClick={this.props.onClick} active={!this.props.value}>No</Button>
            </span>
        );
    }
});

module.exports = YesNoButtons;

/**
 * Created by levushka on 1/28/15.
 */
