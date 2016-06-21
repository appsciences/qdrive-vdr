var React = require('react'),
    ReactLinkedStateMixin = require('react-addons-linked-state-mixin');

var ReactBootstrap = require('react-bootstrap'),
    FormControl = ReactBootstrap.FormControl,
    ControlLabel = ReactBootstrap.ControlLabel,
    Modal = ReactBootstrap.Modal,
    Grid = ReactBootstrap.Grid,
    Row = ReactBootstrap.Row,
    Col = ReactBootstrap.Col,
    ButtonToolbar = ReactBootstrap.ButtonToolbar,
    Button = ReactBootstrap.Button;

const Select = require('react-select');


var TabModal = React.createClass({


    render() {
        return (
            <Modal {...this.props}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Tab</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Grid fluid={true}>
                        <Row>
                            <Col sm={6}>
                                <ControlLabel>Tab Name</ControlLabel>
                                <FormControl type="text" required name="tabName"/>
                            </Col>
                            </Row><Row>
                            <Col sm={6}>
                                <ControlLabel>Grant Access</ControlLabel>
                                <Select

                                    name="entityType"
                                    multi
                                    options={[
                                            {label:"Arya Cleaning Supplies, Inc.", value:"Corp"},
                                            {label:"Baelish Entertainment, LLC", value:"LLC"},
                                            {label:"Cersei Wines, Inc.", value:"LP"}
                                        ]}
                                    />
                            </Col>
                        </Row>
                    </Grid>
                </Modal.Body>
                <Modal.Footer>
                    <ButtonToolbar>
                        <Button bsStyle="primary" type="submit"name="saveButton" value="save">Save</Button>
                    </ButtonToolbar>
                </Modal.Footer>
            </Modal>
        );
    }
});

module.exports = TabModal;