var React = require('react');


var ReactBootstrap = require('react-bootstrap')
    , Nav = ReactBootstrap.Nav
    , NavItem = ReactBootstrap.NavItem
    , Button = ReactBootstrap.Button
    , Badge = ReactBootstrap.Badge;

var ClientList = React.createClass({

    getInitialState(){
        return {showEditButtonForId: null};
    },

    dragStartHandler(event, client) {
        event.dataTransfer.setData("text", JSON.stringify(client));
    },

    render() {

        var list = this.props.clients.map((client) => {
            return(
                <NavItem key={client.id} bsStyle='primary'
                         href="#"
                         className="client-item"
                         draggable="true"
                         onDragStart={e => this.dragStartHandler(e, client)}
                         eventKey={client.id}>

                    <Button className="pull-right edit-button"
                            name="editClientButton"
                            onClick={(e) => {e.stopPropagation(); this.props.onEditClient(client)}}>
                        Edit
                    </Button>

                    <h5>
                        {client.companyName} {client.notificationsCount ? <Badge>{client.notificationsCount}</Badge> : ""}
                    </h5>
                </NavItem>
            );
        });

        return(
            <Nav
                bsStyle="pills"
                stacked
                activeKey={this.props.selectedClientId}
                onSelect={this.props.onSelectClient}
                >
                {list}
            </Nav>
        );
    }
});

module.exports = ClientList;

/**
 * Created by levushka on 2/11/15.
 */
