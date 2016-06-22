require("../css/index.css");

const React = require('react'),
    ReactDOM = require('react-dom');

const Spinner = require('react-spinkit');

const DocumentList = require('./components/documents/document-list'),
    PartyList = require('./components/parties/party-list'),
    TicklerList = require('./components/tickler/tickler-list'),
    ClientListContainer = require('./components/clients/client-list-container'),
    Parties = require('./components/parties/parties-form')

const TabAddModal = require('./components/deal-details/tab-add-modal');


const ReactBootstrap = require('react-bootstrap'),
    Well = ReactBootstrap.Well,
    Panel = ReactBootstrap.Panel,
    Grid = ReactBootstrap.Grid,
    Row = ReactBootstrap.Row,
    Col = ReactBootstrap.Col,
    Button = ReactBootstrap.Button;

var Tabs = require('./components/shared/layout/tabs-panel'),
    Tab = require('./components/shared/layout/tab');


const Application = React.createClass({

    getInitialState() {
        return {
            clients: [
                {
                    id: 0,
                    companyName: 'Baelish Entertainment, LLC',
                    notificationsCount: 3,
                    status: 0
                },
                {
                    id: 1,
                    companyName: 'Brianne Travel LLC',
                    notificationsCount: 1,
                    status: 0

                },

                {
                    id: 2,
                    companyName: 'Firefly Candle Supplies, LLC',
                    notificationsCount: 0,
                    status: 0

                },
                {
                    id: 3,
                    companyName: 'Qdrive Solutions, LLC',
                    notificationsCount: 4,
                    status: 0

                },

            ],
            selectedClientId: 1
        };
    },

    componentDidMount() {

        this.setState({clients:[]});

    },


    selectClient(id) {
        this.setState({selectedClientId: id});
    },

    saveClient(client) {
    },

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={3}>
                        <img src="images/qdrive-logo.png"/>
                    </Col>
                    <Col xs={9} className="text-right">
                        <Button style={{marginTop: 12, marginRight: 8}} >Tutorial</Button>
                        <Button style={{marginTop: 12, marginRight: 8}} >Leave Comment</Button>
                        <Button style={{marginTop: 12}}>Log Out</Button>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Well>
                            {/*<Spinner spinnerName='three-bounce' noFadeIn/>*/}

                            <Grid>

                                <Row>
                                    <Col sm={4}>

                                        <ClientListContainer
                                            clients={this.state.clients}
                                            onSelectClient={this.selectClient}
                                            selectedClientId={this.state.selectedClientId}
                                            saveClient={this.saveClient}

                                            />
                                    </Col>
                                    <Col sm={7}>
                                        <Panel>
                                            <Tabs
                                                defaultActiveKey={1}
                                                addTab={true} onAddTab={e=>this.setState({showAddTabModal: true})}>

                                                <Tab eventKey={1} name="Working Group">
                                                    <PartyList />
                                                </Tab>

                                                <Tab eventKey={2} name="Documents">
                                                    <DocumentList
                                                        />
                                                </Tab>

                                                <Tab eventKey={2} name="Tickler">
                                                    <TicklerList
                                                        />
                                                </Tab>

                                            </Tabs>
                                        </Panel>
                                    </Col>
                                </Row>
                            </Grid>
                        </Well>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <p className="text-center">© 2015 Qdrive Solutions. All Rights Reserved.</p>
                    </Col>
                </Row>

                <TabAddModal
                    show={this.state.showAddTabModal}
                    onHide={e => {this.setState({showAddTabModal: false})}}/>

            </Grid>
        );
    }
});





ReactDOM.render(<Application/>, document.getElementById("app_container"));