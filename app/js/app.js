require("../css/index.css");

const React = require('react'),
    ReactDOM = require('react-dom');

const Spinner = require('react-spinkit');

const DocumentList = require('./components/documents/document-list'),
    PartyList = require('./components/parties/party-list'),
    ClientListContainer = require('./components/clients/client-list-container'),
    Parties = require('./components/parties/parties-form')


const ReactBootstrap = require('react-bootstrap'),
    Well = ReactBootstrap.Well,
    Panel = ReactBootstrap.Panel,
    Tabs = ReactBootstrap.Tabs,
    Tab = ReactBootstrap.Tab,
    Grid = ReactBootstrap.Grid,
    Row = ReactBootstrap.Row,
    Col = ReactBootstrap.Col,
    Button = ReactBootstrap.Button;

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
                        <Button style={{marginTop: 12, marginRight: 8}} target='_new' href="http://www.qdrivesolutions.com/tutorial">Tutorial</Button>
                        <Button style={{marginTop: 12, marginRight: 8}} target='_new' href="http://www.qdrivesolutions.com/comments/">Leave Comment</Button>
                        <Button style={{marginTop: 12}} href="/logout">Log Out</Button>
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
                                            <Tabs defaultActiveKey={1} className="client-details-tabs">
                                                <Tab eventKey={1} title="Working Group">
                                                    <PartyList />
                                                </Tab>

                                                <Tab eventKey={2} title="Documents">
                                                    <DocumentList
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

            </Grid>
        );
    }
});





ReactDOM.render(<Application/>, document.getElementById("app_container"));