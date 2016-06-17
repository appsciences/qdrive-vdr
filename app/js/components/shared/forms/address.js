var React = require('react');
var States = require('./states');

var ReactBootstrap = require('react-bootstrap')
    , Input = ReactBootstrap.Input
    , Grid = ReactBootstrap.Grid
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col;

var Address = React.createClass({
    propTypes: {
        getLinkState: React.PropTypes.func.isRequired,
        namePrefix: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            <div>
                <Row>
                    <Col sm={3}>
                        <Input valueLink={this.props.getLinkState(this.props.namePrefix + "Address")}
                               id={this.props.namePrefix + "Address"}
                               label={this.props.addressLabel || 'Street Address'}
                               type="text"/>
                    </Col>
                    <Col sm={2}>
                        <Input valueLink={this.props.getLinkState(this.props.namePrefix + "City")}
                               id={this.props.namePrefix + "City"}
                               type="text" label="City" />
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <States getLinkState={this.props.getLinkState} namePrefix={this.props.namePrefix}/>
                    </Col>
                    <Col sm={2}>
                        <Input valueLink={this.props.getLinkState(this.props.namePrefix + "Zip")}
                               id={this.props.namePrefix + "Zip"}
                               type="text" label="Zip Code"
                               pattern="^[0-9]{1,5}$"/>
                    </Col>
                </Row>
            </div>
        );
    }
});

module.exports = Address;