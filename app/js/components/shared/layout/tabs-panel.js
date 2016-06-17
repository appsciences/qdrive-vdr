const React = require("react");

const Tabs = React.createClass({

    getInitialState() {
        return {
            selectedTab: 0
        }
    },

    tabDragOverHandler(e) {
        e.preventDefault();
        e.target.classList.add("tab-dropzone");
    },

    tabDragLeaveHandler(e) {
        e.target.classList.remove("tab-dropzone");
    },

    renderNav() {
        return this.props.children.map((tab, index) => {

            return (
                <li role="presentation"
                    key={index}
                    onDragOver={this.tabDragOverHandler}
                    onDragLeave={this.tabDragLeaveHandler}
                    onDrop={(e) => {this.tabDragLeaveHandler(e); tab.props.onDrop(e)}}
                    className={this.state.selectedTab === index ? "active" : ""}
                    onClick={() => this.setState({selectedTab: index})}>
                    <a role="tab">
                        {tab.props.name}
                    </a>
                </li>
            )
            }
        );
    },

    render() {
        return (
            <div>
                <nav>
                    <ul className="nav nav-tabs" role="tablist">
                        {this.renderNav()}
                    </ul>
                </nav>
                <div className="tab-content">
                    {this.props.children.map((tabBody, index) => {
                        const isActive = (index === this.state.selectedTab);

                        return (
                            <div role="tabpanel"
                                 key={index}
                                 className={isActive ? "tab-pane fade active in" : "tab-pane fade"}
                                 aria-hidden={!isActive}>
                                {tabBody}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
});

module.exports = Tabs;