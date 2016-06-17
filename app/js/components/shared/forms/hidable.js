var React = require('react');
var YesNoButtons = require('./yes-no-buttons');

var Hideable = React.createClass ({

    propTypes: {
        onClick: React.PropTypes.func.isRequired,
        heading: React.PropTypes.string,
        value: React.PropTypes.bool.isRequired
    },


    render: function() {

        return (
            <div id={this.props.id}>
                <label>{this.props.heading}</label>
                <YesNoButtons onClick={this.props.onClick} value={this.props.value}/>
                <div style={{display: this.props.value ? 'inline':'none'}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = Hideable;