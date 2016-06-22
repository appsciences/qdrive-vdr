var React = require('react'),
    ReactLinkedStateMixin = require('react-addons-linked-state-mixin');

var ReactBootstrap = require('react-bootstrap'),
    FormControl = ReactBootstrap.FormControl,
    FormGroup = ReactBootstrap.FormGroup,
    ControlLabel = ReactBootstrap.ControlLabel,
    Modal = ReactBootstrap.Modal,
    Grid = ReactBootstrap.Grid,
    Radio = ReactBootstrap.Radio,
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
                                <FormGroup>

                                <ControlLabel>Tab Name</ControlLabel>
                                <FormControl type="text" required name="tabName"/>
                                    </FormGroup>
                            </Col>
                            </Row><Row>
                            <Col sm={6}>
                                <FormGroup>
                                    <ControlLabel>Grant Access</ControlLabel>
                                    <Radio name='access'>
                                        Me Only
                                    </Radio>

                                    <Radio name='access'>
                                        Everyone at my company
                                    </Radio>

                                    <Radio name='access'>
                                        Everyone in the Working Group
                                    </Radio>
                                    <Radio name='access'>
                                        Select below
                                    </Radio>
                                </FormGroup>
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