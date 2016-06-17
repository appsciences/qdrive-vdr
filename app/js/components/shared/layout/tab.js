const React = require("react");


const Tab = React.createClass({
    render() {
        return (<div>{this.props.children}</div>);
    }
});

module.exports = Tab;