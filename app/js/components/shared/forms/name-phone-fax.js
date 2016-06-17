var React = require('react');
var States = require('./states');

var ReactBootstrap = require('react-bootstrap')
    , Input = ReactBootstrap.Input
    , Grid = ReactBootstrap.Grid
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col;

var Phone = require('./phone');

var NamePhoneFax = React.createClass({
    propTypes: {
        getLinkState: React.PropTypes.func.isRequired,
        namePrefix: React.PropTypes.string.isRequired
    },

    render: function() {

        var fax = this.props.showFax && (
            <Col sm={2}>
                <Phone fax={true} getLinkState={this.props.getLinkState} namePrefix={this.props.namePrefix} label="Fax"/>
            </Col>);

        var email = this.props.showEmail && (
            <Col sm={2}>
                <Input valueLink={this.props.getLinkState(this.props.namePrefix + "Email")}
                       id={this.props.namePrefix + "Email"}
                       type="email" label="Email"/>
            </Col>);

        return (
            <Row>
                <Col sm={3}>
                    <Input valueLink={this.props.getLinkState(this.props.namePrefix + "Contact")}
                           id={this.props.namePrefix + "Contact"}
                           type="text" label={this.props.nameLabel || "Contact Person"}/>
                </Col>
                <Col sm={2}>
                    <Phone getLinkState={this.props.getLinkState} namePrefix={this.props.namePrefix}/>
                </Col>
                {fax}
                {email}
            </Row>
        );
    }
});

module.exports = NamePhoneFax;