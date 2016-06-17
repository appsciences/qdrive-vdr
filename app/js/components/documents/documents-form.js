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

    renderRow(j){
        return(
            <Row>
                <Col sm={3}>
                    <ControlLabel>Document Name</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter text"
                        value={this.state.names[j]}
                        onChange={(e) => this.setName(e.target.value, j)}/>
                </Col>
                <Col sm={3}>
                    <ControlLabel>Responsible</ControlLabel>
                    <Select

                        name="entityType"
                        value={this.state.responsible[j]}

                        options={[
                                            {label:"Party 1", value:"Corp"},
                                            {label:"Party 2", value:"LLC"},
                                            {label:"Party 3", value:"LP"}
                                        ]}
                        onChange={(v) => this.setResponsible(v, j)}
                        />
                </Col>

                <Col sm={3}>
                    <ControlLabel>Parties</ControlLabel>

                    <Select
                        name="entityType"
                        multi
                        options={[
                                {label:"Party 1", value:"Corp"},
                                {label:"Party 2", value:"LLC"},
                                {label:"Party 3", value:"LP"}
                            ]}
                        onChange={(v) => this.setParties(v, j)}
                        value={this.state.parties[j]}

                        />
                </Col>
                <Col sm={1} style={{paddingTop:25}}>
                    <Button bsStyle="primary" onClick={this.addLine}>
                        <Glyphicon glyph="plus"/>
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