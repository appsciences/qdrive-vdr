var React = require('react');
var TableForm = require('./table-form');

var ReactBootstrap = require('react-bootstrap')
    , Input = ReactBootstrap.Input
    , Grid = ReactBootstrap.Grid
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col;

var Select = require('react-select');

var FinancialsFrequency = React.createClass({
    propTypes: {
        getLinkState: React.PropTypes.func.isRequired,
        namePrefix: React.PropTypes.string.isRequired
    },

    render: function () {
        return (
            <TableForm
                title={this.props.title}
                collection={this.props.collection}

                columns={this.props.collection.validateColumnSpecs([
                    {key: this.props.namePrefix + "FinancialFrequencyGenerationFrequency", label: 'Frequency'},
                    {key: this.props.namePrefix + "FinancialFrequencyPreparationFrequency", label: 'Preparation'}
                ])}
            >
                <Grid>
                    <Row>
                        <Col sm={2}>
                            <label>Frequency</label>
                            <Select
                                value={this.props.getLinkState(this.props.namePrefix + "FinancialFrequencyGenerationFrequency").value}
                                onChange={this.props.getLinkState(this.props.namePrefix + "FinancialFrequencyGenerationFrequency", true).requestChange}
                                allowCreate={true}
                                options={[
                                {label:"Monthly", value:"Monthly"},
                                {label:"Quarterly", value:"Quarterly"},
                                {label:"Biannually", value:"Biannually"},
                                {label:"Annually", value:"Annually"}
                            ]}
                                />
                        </Col>
                        <Col sm={2}>
                            <label>Preparation</label>
                            <Select
                                value={this.props.getLinkState(this.props.namePrefix + "FinancialFrequencyPreparationFrequency").value}
                                onChange={this.props.getLinkState(this.props.namePrefix + "FinancialFrequencyPreparationFrequency", true).requestChange}
                                allowCreate={true}
                                options={[
                                {label:"Internally Prepared", value:"Internally Prepared"},
                                {label:"Compiled", value:"Compiled"},
                                {label:"Reviewed", value:"Reviewed"},
                                {label:"Audited", value:"Audited"}
                            ]}
                                />
                        </Col>
                    </Row>

                </Grid>
            </TableForm>
        );
    }
});

module.exports = FinancialsFrequency;
