
var React = require('react');

var ReactBootstrap = require('react-bootstrap')
    , Input = ReactBootstrap.Input
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col;


var Phone = React.createClass({
    propTypes: {
        getLinkState: React.PropTypes.func.isRequired,
        namePrefix: React.PropTypes.string.isRequired,
        fax: React.PropTypes.string
    },

    componentDidMount: function() {
        var parentValueLink = this.props.getLinkState(this.props.namePrefix + (this.props.fax ? 'Fax' : 'Phone'));

        if (parentValueLink.value) {
            var maskedValue = this.applyPhoneMask(parentValueLink.value);
            parentValueLink.requestChange(maskedValue);
        }
    },

    applyPhoneMask: function(value) {
        var cleanValue = value.replace(/\D/g, "");

        /* (917)345-5334 */
        var maskedValue = "";

        for (var i = 0; i < cleanValue.length && i < 10; i++) { // 10 = phone length
            switch (i) {
                case 0:
                    maskedValue = "(" + cleanValue[i];
                    break;
                case 3:
                    maskedValue += ") " + cleanValue[i];
                    break;
                case 6:
                    maskedValue += "-" + cleanValue[i];
                    break;
                default :
                    maskedValue += cleanValue[i]
            }
        }

        return maskedValue;
    },

    render: function() {
        // transfer props
        var {getLinkState, fax, namePrefix, ...otherProps} = this.props;

        var valueFieldName = namePrefix ? namePrefix + (fax ? 'Fax' : 'Phone') : (fax ? 'fax' : 'phone');

        var parentValueLink = getLinkState(valueFieldName, true);

        // create new link with applying mask callback
        var link = {
            value: parentValueLink.value,
            requestChange: (newValue) => {
                var maskedValue = this.applyPhoneMask(newValue);
                parentValueLink.requestChange(maskedValue);
            }
        };

        return (
            <Input
                type="tel"
                label="Phone"
                id={valueFieldName}
                {...otherProps}
                valueLink={link}
                name={valueFieldName}
                />
        );
    }
});

module.exports = Phone;

/**
 * Created by levushka on 1/28/15.
 */
