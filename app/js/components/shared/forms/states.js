var React = require('react');
var Select = require('react-select');

var States = React.createClass({
    propTypes: {
        getLinkState: React.PropTypes.func.isRequired,
        namePrefix: React.PropTypes.string.isRequired,
        withoutLabel: React.PropTypes.bool
    },

    render: function () {
        var options = this.props.addBefore || [];

        options = options.concat([
            {label: 'AL', value: 'AL'},
            {label: 'AK', value: 'AK'},
            {label: 'AZ', value: 'AZ'},
            {label: 'AR', value: 'AR'},
            {label: 'CA', value: 'CA'},
            {label: 'CO', value: 'CO'},
            {label: 'CT', value: 'CT'},
            {label: 'DC', value: 'DC'},
            {label: 'DE', value: 'DE'},
            {label: 'FL', value: 'FL'},
            {label: 'GA', value: 'GA'},
            {label: 'HI', value: 'HI'},
            {label: 'ID', value: 'ID'},
            {label: 'IL', value: 'IL'},
            {label: 'IN', value: 'IN'},
            {label: 'IA', value: 'IA'},
            {label: 'KS', value: 'KS'},
            {label: 'KY', value: 'KY'},
            {label: 'LA', value: 'LA'},
            {label: 'ME', value: 'ME'},
            {label: 'MD', value: 'MD'},
            {label: 'MA', value: 'MA'},
            {label: 'MI', value: 'MI'},
            {label: 'MN', value: 'MN'},
            {label: 'MS', value: 'MS'},
            {label: 'MO', value: 'MO'},
            {label: 'MT', value: 'MT'},
            {label: 'NE', value: 'NE'},
            {label: 'NV', value: 'NV'},
            {label: 'NH', value: 'NH'},
            {label: 'NJ', value: 'NJ'},
            {label: 'NM', value: 'NM'},
            {label: 'NY', value: 'NY'},
            {label: 'NC', value: 'NC'},
            {label: 'ND', value: 'ND'},
            {label: 'OH', value: 'OH'},
            {label: 'OK', value: 'OK'},
            {label: 'OR', value: 'OR'},
            {label: 'PA', value: 'PA'},
            {label: 'RI', value: 'RI'},
            {label: 'SC', value: 'SC'},
            {label: 'SD', value: 'SD'},
            {label: 'TN', value: 'TN'},
            {label: 'TX', value: 'TX'},
            {label: 'UT', value: 'UT'},
            {label: 'VT', value: 'VT'},
            {label: 'VA', value: 'VA'},
            {label: 'WA', value: 'WA'},
            {label: 'WV', value: 'WV'},
            {label: 'WI', value: 'WI'},
            {label: 'WY', value: 'WY'}]);

        if (this.props.addAfter) {
            options = options.concat(addAfter);
        }

        const linkedPropertyName = this.props.namePrefix ? this.props.namePrefix + "State" : "state";

        return (
            <span>
                {
                    !this.props.withoutLabel && <label>{this.props.label || 'State'}</label>
                }
                <Select
                    options={options}
                    value={this.props.getLinkState(linkedPropertyName).value}
                    onChange={this.props.getLinkState(linkedPropertyName, true).requestChange}

                    placeHolder=''
                    {...this.props}
                    className='qdrive-small'
                />
            </span>
        );
    }
});

module.exports = States;