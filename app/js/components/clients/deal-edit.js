var React = require('react'),
    ReactLinkedStateMixin = require('react-addons-linked-state-mixin');

var ReactBootstrap = require('react-bootstrap'),
    Input = ReactBootstrap.Input,
    Modal = ReactBootstrap.Modal,
    Grid = ReactBootstrap.Grid,
    Row = ReactBootstrap.Row,
    Col = ReactBootstrap.Col,
    ButtonToolbar = ReactBootstrap.ButtonToolbar,
    Button = ReactBootstrap.Button;

var States = require("../shared/forms/states"),
    ContactInfo = require("../shared/forms/contact-info"),
    ConfirmModal = require("../shared/layout/confirm-modal");


var ClientEditModal = React.createClass({

    propTypes: {
        client: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onHide: React.PropTypes.func.isRequired
    },

    mixins: [ReactLinkedStateMixin],

    getInitialState() {
        return this.props.client;
    },

    save(event) {
        event.preventDefault();

        this.props.onSave(this.state);
        this.props.onHide();
    },

    hideHandler() {
        this.props.onHide();
    },

    render() {
        return (
            <Modal show={true} onHide={this.hideHandler}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.client.id ? 'Edit':'New'} Client</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Grid fluid={true}>
                        <Row>
                            <Col sm={10}>
                                <Input type="text" label="Company Name" required name="companyName" valueLink={this.linkState("companyName")}/>
                            </Col>
                        </Row>
                    </Grid>
                </Modal.Body>
                <Modal.Footer>
                    <ButtonToolbar>
                        <Button bsStyle="primary" type="submit" onClick={this.save} name="saveButton" value="save">Save</Button>
                    </ButtonToolbar>
                </Modal.Footer>
            </Modal>
        );
    }
});

module.exports = ClientEditModal;