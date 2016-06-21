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