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

    getInitialState() {
        return {
            lines: 1,
            frequency: true
        };
    },

    addLine(e){

        this.setState({lines:this.state.lines + 1});

    },

    removeLine(e){

        this.setState({lines:this.state.lines - 1});

    },

    renderRow(j){
        return(
            <Row>
                <Col sm={2}>
                    <ControlLabel>Requirement</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter text"/>
                </Col>

                <Col sm={2}>
                    <ControlLabel>Frequency</ControlLabel>

                <Select

                    name="frequency"
                    onChange={v=>this.setState({frequency:v.value})}
                    value={this.state.frequency}
                    options={[
                                            {label:"Monthly", value:"Monthly"},
                                            {label:"Quarterly", value:"Quarterly"},
                                            {label:"Annually", value:"Annually"},
                                            {label:"Specify Date", value:"Specify Date"}


                                        ]}
                    />
                </Col>
                <Col sm={2}>


                <ControlLabel style={{display:this.state.frequency === 'Specify Date' ?'block' : 'none'}}>Specify Date</ControlLabel>

                <FormControl
                    style={{display:this.state.frequency === 'Specify Date' ?'block' : 'none'}}
                    type="date"
                    />

                <ControlLabel style={{display:this.state.frequency !== 'Specify Date' ?'block' : 'none'}}>Days After Period</ControlLabel>

                <FormControl
                    style={{display:this.state.frequency !== 'Specify Date' ?'block' : 'none'}}
                    placeholder="Enter text"
                    />
                </Col>
                <Col sm={2}>
                    <ControlLabel>Prior Alert</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter text"/>
                </Col>

                <Col sm={2}>
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
                <Col sm={2} style={{paddingTop:25}}>
                    <Button bsStyle="primary" onClick={this.addLine}>
                        <Glyphicon glyph="plus"/>
                    </Button>&nbsp;
                    <Button bsStyle="primary" onClick={this.removeLine}>
                        <Glyphicon glyph="minus"/>
                    </Button>
                </Col>
            </Row>
        );
    },

    render() {

        return (
            <Grid>

                {_.times(this.state.lines, (i)=> this.renderRow(i))}

            </Grid>


        );
    }
});

module.exports = DocumentsForm;