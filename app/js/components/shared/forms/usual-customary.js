var React = require('react');

var ReactBootstrap = require('react-bootstrap')
    , Input = ReactBootstrap.Input
    , Grid = ReactBootstrap.Grid
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col;


var YesNoMixin = require("./../mixins/yes-no-mixin")
, Hidable = require('./hidable')
, YesNoButtons = require('./yes-no-buttons');

var UsualCustomary = React.createClass({

    mixins: [YesNoMixin],

    propTypes: {
        getLinkState: React.PropTypes.func.isRequired,
        namePrefix: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            <div>
                <Row>
                    <Col sm={3}>
                        <label>{this.props.usualLabel || 'Usual Customary'}
                            <YesNoButtons
                                onClick={this.yesNoClickFunc(this.props.getLinkState, this.props.namePrefix + "UsualAndCustomary")}
                                value={this.props.getLinkState(this.props.namePrefix + "UsualAndCustomary").value}
                            />
                        </label>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <Hidable
                            onClick={this.yesNoClickFunc(this.props.getLinkState, this.props.namePrefix + "AnyOther")}
                            value={this.props.getLinkState(this.props.namePrefix + "AnyOther").value}
                            heading="Other">
                            <Input valueLink={this.props.getLinkState(this.props.namePrefix + "Other")} type='textarea'/>
                        </Hidable>

                    </Col>
                </Row>
            </div>
        );
    }
});

module.exports = UsualCustomary;