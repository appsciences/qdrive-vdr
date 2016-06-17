var React = require('react');

var ReactBootstrap = require('react-bootstrap')
    , Input = ReactBootstrap.Input
    , FormControls = ReactBootstrap.FormControls;


var TableForm = require('./table-form');

var SpecialConditions = React.createClass({

    propTypes: {
        columnPostFix: React.PropTypes.string.isRequired,
        columnLabelPostFix: React.PropTypes.string.isRequired,
        collection: React.PropTypes.object.isRequired,
        getLinkState: React.PropTypes.func.isRequired,
        static: React.PropTypes.bool
    },

    render: function () {
        if (this.props.static) { //`special${this.props.columnPostFix}`
            return <div className="form-horizontal">
                {
                    this.props.collection.data.map((entry) => {
                        return (
                            <FormControls.Static label=" - "
                                                 labelClassName="col-xs-3"
                                                 wrapperClassName="col-xs-9">
                                <span>{entry[`special${this.props.columnPostFix}`]}</span>
                            </FormControls.Static>
                        );
                    })
                }
            </div>;
        }


        return (
            <TableForm
                omitPanel="true"
                collection={this.props.collection}
                columns={this.props.collection.validateColumnSpecs([
                                {key: `special${this.props.columnPostFix}`, label: ``}
                ])}
                >
                <Input valueLink={this.props.getLinkState(`special${this.props.columnPostFix}`)}
                       label=""
                       type='text'/>

            </TableForm>
        );
    }
});

module.exports = SpecialConditions;