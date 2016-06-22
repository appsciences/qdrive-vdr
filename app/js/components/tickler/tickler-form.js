/**
 * Created by idiot on 6/17/16.
 */
const React = require('react'),
    ReactDOM = require('react-dom');

const _ = require('lodash');


const ReactBootstrap = require('react-bootstrap'),
    Well = ReactBootstrap.Well,
    Panel = ReactBootstrap.Panel,
    Grid = ReactBootstrap.Grid,
    Row = ReactBootstrap.Row,
    Col = ReactBootstrap.Col,
    Button = ReactBootstrap.Button,
    FormControl = ReactBootstrap.FormControl,
    FormGroup = ReactBootstrap.FormGroup,
    ControlLabel = ReactBootstrap.ControlLabel,
    Glyphicon = ReactBootstrap.Glyphicon,
    Alert = ReactBootstrap;

const Select = require('react-select');

const DocumentsForm = React.createClass({



    render() {

        return (
            <Grid>
                <Row>
                    <Col sm={4}>
                        <ControlLabel>Requirement</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter text"
                            onChange={(e) => this.setName(e.target.value, j)}/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <ControlLabel>Frequency</ControlLabel>


                        <Select

                            name="entityType"

                            options={[
                                            {label:"Monthly", value:"Corp"},
                                            {label:"Quarterly", value:"LLC"},
                                            {label:"Annually", value:"LP"},
                                            {label:"Specify Date", value:"LP"}
                                        ]}
                            />
                        </Col>
                        <Col sm={3}>
                            <ControlLabel>Specify Date</ControlLabel>

                            <FormControl
                            type="date"
                            />

                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <ControlLabel>Send Reminders To</ControlLabel>
                        <Select

                            name="entityType"

                            options={[
                                            {label:"Arya Cleaning Supplies, Inc.", value:"Corp"},
                                            {label:"Baelish Entertainment, LLC", value:"LLC"},
                                            {label:"Cersei Wines, Inc.", value:"LP"}
                                        ]}
                            />
                    </Col>


                </Row>


            </Grid>


        );
    }
});

module.exports = DocumentsForm;