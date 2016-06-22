var React = require('react')
    , Spinner = require('react-spinkit');

var ReactBootstrap = require('react-bootstrap')
    , Button = ReactBootstrap.Button
    , Panel = ReactBootstrap.Panel
    , TabbedArea = ReactBootstrap.TabbedArea
    , TabPane = ReactBootstrap.TabPane
    , Input = ReactBootstrap.Input;

    var TabsPanel = require('../shared/layout/tabs-panel'),
        Tab = require('../shared/layout/tab');

var DealEditModal = require('./deal-edit')
    , TabAddModal = require('./tab-add-modal')
    , ClientList = require('./client-list')
    , ConfirmModal = require('../shared/layout/confirm-modal')
    , StateToolsMixin = require('../shared/mixins/state-tools-mixin');


var ClientListContainer = React.createClass({
    mixins: [StateToolsMixin],

    getInitialState(){
        return {
            showNewClientModal:false,
            showEditClientModal:false,
            currentHoverClient: null,
            showAddTabModal: false,
            searchQuery: ""
        }
    },

    getFilteredClients(status) {
        const searchQuery = this.state.searchQuery.toLowerCase();

        return this.props.clients.filter((client) =>
            client.status === status && client.companyName.toLowerCase().indexOf(searchQuery) !== -1
        );
    },

    showEditClientModal(client){
        this.setState({
            showEditClientModal: true,
            currentHoverClient: client
        });

    },

    showDeleteClientModal(clientIdToDelete) {
        this.setState({showDeleteModal: true});

        this.clientIndexToDelete = -1; // index of client clicked on

        for (let i = 0; i < this.props.clients.length; i++) {
            if (this.props.clients[i].id === clientIdToDelete) {
                this.clientIndexToDelete = i;
                return;
            }
        }
    },

    deleteClientHandler() {
        this.setState({showDeleteModal: false});

        if (this.clientIndexToDelete === -1) return;

        let deletedClient = this.props.clients.splice(this.clientIndexToDelete, 1)[0];
        deletedClient.status = 4; // status 4 - deleted client

        this.props.saveClient(deletedClient);

        // select first client in the client list
        this.props.clients.length && this.props.onSelectClient(this.props.clients[0].id);
    },

    hideClientModal(){
        this.setState({
            showNewClientModal : false,
            showEditClientModal : false
        })
    },

    clientDropHandler(event, newStatus) {
        const droppedClient = JSON.parse(event.dataTransfer.getData("text"));
        droppedClient.status = newStatus;
        this.props.saveClient(droppedClient);
    },

    render() {
        return (
            <Panel>
                <div style={{marginBottom:50}}>
                    <span style={{float: "left", marginRight:10, fontSize:23, fontWeight:"bolder"}}>Deals</span>
                    <Input onChange={e => this.setState({searchQuery: e.target.value})}
                           style={{float: "left", width: 150, marginRight:10}}
                           type="search" placeholder="Search..."/>
                    <Button id="addNewClientBtn" style={{float: "left"}}
                            bsStyle="primary" onClick={this.setStateVarFunc('showNewClientModal', true)}>
                        Add
                    </Button>
                </div>
                <br/>

                {(this.state.showNewClientModal || this.state.showEditClientModal) &&
                <DealEditModal
                    onSave={this.props.saveClient}
                    title="New Client"
                    onHide={this.hideClientModal}
                    client= {this.state.showNewClientModal ? {} :
                                this.state.currentHoverClient}
                    />}

                {this.state.showDeleteModal &&
                <ConfirmModal title={"Delete client"}
                             onYes={this.deleteClientHandler}
                             onCancel={() => {this.setState({showDeleteModal: false})}}>
                    All deal data, including Information Sheet and
                    Term Sheet data will be deleted. <br /> Are you sure?
                </ConfirmModal>
                }

                <TabAddModal
                              show={this.state.showAddTabModal}
                              onHide={() => {this.setState({showAddTabModal: false})}}/>

                <TabsPanel addTab={true} onAddTab={e=>this.setState({showAddTabModal: true})}>
                    <Tab name="Active"
                         onDrop={e => this.clientDropHandler(e, 0)}>
                        <ClientList
                            clients={this.getFilteredClients(0)}
                            onSelectClient={this.props.onSelectClient}
                            onEditClient={this.showEditClientModal}
                            onDeleteClient={this.showDeleteClientModal}
                            selectedClient={this.props.selectedClient}
                            selectedClientId={this.props.selectedClientId}
                        />
                    </Tab>
                    <Tab name="Closed"
                         onDrop={e => this.clientDropHandler(e, 1)}>

                    </Tab>
                </TabsPanel>
            </Panel>
        );
    }
});

module.exports = ClientListContainer;

/**
 * Created by levushka on 2/11/15.
 */
