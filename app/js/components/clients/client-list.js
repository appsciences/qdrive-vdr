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
                         eventKey={client.id}>


                    <h5>
                        eee
                    </h5>
                </NavItem>
            );
        });

        return(
            <div>
            <Nav
                bsStyle="pills"
                stacked
                activeKey={0}
                >
                {list}
            </Nav>
                <Nav
                    bsStyle="pills"
                    stacked
                    activeKey='0'
                    >
                    <NavItem key='0' bsStyle='primary'
                             href="#"
                             className="client-item"
                             eventKey='0'>


                        <h5>
                            Black Rock
                        </h5>
                    </NavItem>
                    <NavItem key='1' bsStyle='primary'
                             href="#"
                             className="client-item"
                             eventKey='1'>


                        <h5>
                            Cablevision&nbsp;<Badge>2</Badge>
                        </h5>
                    </NavItem>
                    <NavItem key='2' bsStyle='primary'
                             href="#"
                             className="client-item"
                             eventKey='2'>


                        <h5>
                            HEA&nbsp;<Badge>4</Badge>
                        </h5>
                    </NavItem>
                    <NavItem key='3' bsStyle='primary'
                             href="#"
                             className="client-item"
                             eventKey='3'>


                        <h5>
                            Transdigm
                        </h5>
                    </NavItem>
                </Nav>
                </div>
        );
    }
});

module.exports = ClientList;

/**
 * Created by levushka on 2/11/15.
 */
