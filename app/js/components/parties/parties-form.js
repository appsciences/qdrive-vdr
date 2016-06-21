/**
 * Created by idiot on 6/17/16.
 */
const React = require('react'),
    ReactDOM = require('react-dom');

const _ = require('lodash');


var ReactBootstrap = require('react-bootstrap'),
    FormControl = ReactBootstrap.FormControl,
    ControlLabel = ReactBootstrap.ControlLabel,
    Modal = ReactBootstrap.Modal,
    Grid = ReactBootstrap.Grid,
    Row = ReactBootstrap.Row,
    Col = ReactBootstrap.Col,
    ButtonToolbar = ReactBootstrap.ButtonToolbar,
    Button = ReactBootstrap.Button;

var States = require("../shared/forms/states"),
    ContactInfo = require("../shared/forms/contact-info"),
    ConfirmModal = require("../shared/layout/confirm-modal");

const Select = require('react-select');

const PartiesForm = React.createClass({

    getInitialState() {
        return {
            lines: 1,
            names: [''],
            responsible: [''],
            parties: ['']
        };
    },

    addLine(e){

        this.setState({lines:this.state.lines + 1});

    },

    setName(value, ordinal){

        this.setState({names: this.state.names.fill(value, ordinal , ordinal + 1)})
    },

    setResponsible(value, ordinal){

        this.setState({responsible: this.state.responsible.fill(value, ordinal , ordinal + 1)})
    },

    setParties(value, ordinal){

        this.setState({responsible: this.state.parties.fill(value, ordinal , ordinal + 1)})
    },

    render() {

        return (
           <Grid fluid={true}>
                <Row>
                    <Col sm={6}>
                        <ControlLabel>Company Name</ControlLabel>
                        <FormControl type="text" required name="companyName"/>
                    </Col>
                    <Col sm={6}>
                        <ControlLabel>Role</ControlLabel>
                        <FormControl type="text" required name="companyName"/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        <ControlLabel>Street Address</ControlLabel>
                        <FormControl type="text" name='address' />
                    </Col>

                </Row>
                <Row>
                    <Col sm={4}>
                        <ControlLabel>City</ControlLabel>
                        <FormControl id="city" type="text" name='city' />
                    </Col>
                    <Col sm={3}>
                        <States label="State" namePrefix="" />
                    </Col>
                    <Col sm={3}>
                        <ControlLabel>Zip Code</ControlLabel>
                        <FormControl type="text" name='zip' pattern="^[0-9]{1,5}$" />
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <h4>Contact</h4>
                    </Col>
                </Row>
                <Row>
                    <Col sm={5}><ControlLabel>First Name</ControlLabel>
                        <FormControl type="text" name="contactFirstName"
                               />
                    </Col>
                    <Col sm={5}>
                        <ControlLabel>Last Name</ControlLabel>
                        <FormControl type="text" name="contactLastName"/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}><ControlLabel>Title</ControlLabel>
                        <FormControl type="text" name="contactTitle"
                               />
                    </Col>
                </Row>
               <Row>
                   <Col sm={5}><ControlLabel>Email</ControlLabel>
                       <FormControl type="text" name="contactFirstName"
                           />
                   </Col>
                   <Col sm={5}>
                       <ControlLabel>Phone</ControlLabel>
                       <FormControl type="text" name="contactLastName"/>
                   </Col>
               </Row>
               <Row>
                   <Col sm={3}><ControlLabel>Email</ControlLabel>
                       <Button bsStyle="primary">Save/Add</Button>
                   </Col>

               </Row>
            </Grid>


        );
    }
});

module.exports = PartiesForm;