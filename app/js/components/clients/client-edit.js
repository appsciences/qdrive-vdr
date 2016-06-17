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
        let oldClientData = this.props.client;
        let newClientData = this.state;

        let wasChanged = false;

        // check for changes
        for (let i in oldClientData) {
            if (oldClientData.hasOwnProperty(i) && newClientData.hasOwnProperty(i)) {
                if ((oldClientData[i] != newClientData[i])) {
                    wasChanged = true;
                    break;
                }
            }
        }

        if (wasChanged) {
            this.setState({
                showConfirmModal: true
            })
        } else {
            this.props.onHide();
        }
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
                        <Row>
                            <Col sm={6}>
                                <Input type="text" label='Street Address' name='address' valueLink={this.linkState("address")}/>
                            </Col>
                            <Col sm={4}>
                                <Input id="city" type="text" label="City" name='city' valueLink={this.linkState("city")}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={3}>
                                <States label="State" namePrefix="" getLinkState={this.linkState}/>
                            </Col>
                            <Col sm={4}>
                                <Input type="text" label="Zip Code" name='zip' pattern="^[0-9]{1,5}$" valueLink={this.linkState("zip")}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <h4>Contact</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={5}>
                                <Input type="text" label="First Name" name="contactFirstName"
                                       valueLink={this.linkState("contactFirstName")}/>
                            </Col>
                            <Col sm={5}>
                                <Input type="text" label="Last Name" name="contactLastName"
                                       valueLink={this.linkState("contactLastName")}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={8}>
                                <Input type="text" label="Title" name="contactTitle"
                                       valueLink={this.linkState("contactTitle")}/>
                            </Col>
                        </Row>
                    </Grid>
                    <Grid>
                        <ContactInfo getLinkState={this.linkState}  namePrefix=''/>
                    </Grid>
                    {
                        this.state.showConfirmModal &&
                        <ConfirmModal title="Unsaved changes"
                                      onYes={this.props.onHide}
                                      onCancel={e => this.setState({showConfirmModal: false})}
                                      onHide={e => this.setState({showConfirmModal: false})}>
                            Unsaved changes will be lost. <br />
                            Are you sure?
                        </ConfirmModal>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <ButtonToolbar>
                        <Button bsStyle="primary" title="Import from Outlook or CRM" form="clientForm" disabled='true' name="importButton" value="import">Import</Button>
                        <Button bsStyle="primary" type="submit" onClick={this.save} name="saveButton" value="save">Save</Button>
                    </ButtonToolbar>
                </Modal.Footer>
            </Modal>
        );
    }
});

module.exports = ClientEditModal;