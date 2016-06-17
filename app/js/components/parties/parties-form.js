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

    renderRow(j){
        return(
            <Row>
                <Col sm={3}>
                    <ControlLabel>Name</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter text"
                        value={this.state.names[j]}
                        onChange={(e) => this.setName(e.target.value, j)}/>
                </Col>

                <Col sm={3}>
                    <ControlLabel>Title</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter text"
                        value={this.state.names[j]}
                        onChange={(e) => this.setName(e.target.value, j)}/>
                </Col>

                <Col sm={3}>
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter text"
                        value={this.state.names[j]}
                        onChange={(e) => this.setName(e.target.value, j)}/>
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

module.exports = PartiesForm;