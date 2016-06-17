var React = require('react');

var ReactBootstrap = require('react-bootstrap'),
    Input = ReactBootstrap.Input;


var Amount = React.createClass({
    propTypes: {
        valueLink: React.PropTypes.func.isRequired
    },

    componentDidMount: function() {
        // mask on load
        if (this.props.valueLink.value) {
            var maskedValue = this.applyAmountMask(this.props.valueLink.value);
            this.props.valueLink.requestChange(maskedValue);
        }
    },

    applyAmountMask: function(value) {
        var cleanValue = value.replace(/\D/g, "");

        var maskedValue = "";

        for (var i = 0; i < cleanValue.length; i++) {
            maskedValue = cleanValue[cleanValue.length - 1 - i] + maskedValue;
            if ((i + 1) % 3 === 0 && i != cleanValue.length - 1) {
                maskedValue = "," + maskedValue;
            }
        }

        return maskedValue;
    },

    render: function() {
        // transfer props to skip valueLink property
        var {valueLink, ...otherProps} = this.props;

        // create new link with applying amount mask
        var link = {
            value: valueLink.value,
            requestChange: (newValue) => {
                var maskedValue = this.applyAmountMask(newValue);
                valueLink.requestChange(maskedValue);
            }
        };

        return (
            <Input
                addonBefore={this.props.addonBefore || '$'}
                type="text"
                {...otherProps}
                valueLink={link}
            />
        )
    }
});

module.exports = Amount;

/**
 * Created by Evgeniy Baranuk on 10/2/15.
 */
