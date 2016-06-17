var React = require('react');

var ReactBootstrap = require('react-bootstrap'),
    Grid = ReactBootstrap.Grid,
    FormControl = ReactBootstrap.FormControl,
    Input = ReactBootstrap.Input,
    Row = ReactBootstrap.Row,
    Col = ReactBootstrap.Col;

var ContactInfo = React.createClass({
    propTypes: {
        getLinkState: React.PropTypes.func.isRequired,
        namePrefix: React.PropTypes.string.isRequired,
        showContactName: React.PropTypes.bool,
        showFax: React.PropTypes.bool
    },

    render: function() {
        const contactNameFieldName = this.props.namePrefix ? this.props.namePrefix + "ContactName" : "contactName";
        const emailFieldName = this.props.namePrefix ? this.props.namePrefix + "Email" : "email";

        return (
                <Row>
                    {this.props.showContactName && (
                        <Col sm={3} >
                            <FormControl valueLink={this.props.getLinkState(contactNameFieldName)}
                                   label={this.props.contactNameLabel || 'Contact Name'}
                                   id={contactNameFieldName}
                                   type="text"/>
                        </Col>
                    )}
                    <Col sm={2}>
                        <FormControl
                            label="Phone"
                            namePrefix={this.props.namePrefix}
                            getLinkState={this.props.getLinkState}
                            />
                    </Col>
                    {this.props.showFax && (
                        <Col sm={2} >
                            <FormControl label='Fax'
                                   fax="true"
                                   namePrefix={this.props.namePrefix}
                                   getLinkState={this.props.getLinkState}/>
                        </Col>
                    )}
                    <Col sm={3}>
                        <FormControl valueLink={this.props.getLinkState(emailFieldName)}
                               id={emailFieldName}
                               name={emailFieldName}
                               label="Email" type="email"/>
                    </Col>
                </Row>
        );
    }
});

module.exports = ContactInfo;