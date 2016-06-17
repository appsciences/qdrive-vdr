var React = require('react');

var ReactBootstrap = require('react-bootstrap')
    , Button = ReactBootstrap.Button;

var Hideable2 = React.createClass ({

    propTypes: {
        onClick: React.PropTypes.func.isRequired,
        value: React.PropTypes.string.isRequired,
        val1: React.PropTypes.string.isRequired,
        val2: React.PropTypes.string.isRequired
    },

    render: function() {

        return (
            <div id={this.props.id}>
                <label>{this.props.heading}</label>&nbsp;&nbsp;
                <Button value={this.props.val1} onClick={this.props.onClick} active={this.props.value == this.props.val1}>{this.props.label1}</Button>
                <Button value={this.props.val2} onClick={this.props.onClick} active={this.props.value == this.props.val2}>{this.props.label2}</Button>

                <div style={{display: this.props.value == this.props.val1 ? 'block':'none'}}>
                    {this.props.children[0]}
                </div>
                <div style={{display: this.props.value == this.props.val2 ? 'block':'none'}}>
                    {this.props.children[1]}
                </div>
            </div>
        );

    }
});

module.exports = Hideable2;