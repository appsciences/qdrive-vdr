const React = require('react'),
    Spinner = require('react-spinkit');

const ReactBootstrap = require('react-bootstrap'),
    ButtonGroup = ReactBootstrap.ButtonGroup,
    DropdownButton = ReactBootstrap.DropdownButton,
    MenuItem = ReactBootstrap.MenuItem,
    Grid = ReactBootstrap.Grid,
    Row = ReactBootstrap.Row,
    Col = ReactBootstrap.Col,
    Label = ReactBootstrap.Label,
    Input = ReactBootstrap.Input,
    Alert = ReactBootstrap.Alert,
    Button = ReactBootstrap.Button,
    ButtonToolbar = ReactBootstrap.ButtonToolbar;

const DocumentationListHolder = require('../shared/layout/list-holder'),
    FileUploadButton = require('../shared/layout/file-upload-button'),
    FileUploadModal = require('../shared/layout/file-upload-modal'),
    SendDocuments = require('./send-documents'),
    ConfirmModal = require('../shared/layout/confirm-modal'),
    PromptModal = require('../shared/layout/prompt-modal'),
    OfficeOnline = require('../shared/layout/office-online'),
    DocusignModal = require('../shared/layout/docusign'),
    RedliningModal = require('./redlining-modal');

const DocumentsModal = require('./documents-modal');

const DocumentList = React.createClass({

    propTypes: {
    },

    getInitialState(){

        return {
            showDocumentsModal: false,
            showDocusignModal: false,
            documentList: [
                {
                    action:'Action',
                    name:'Name',

                },
                {
                    type:'Group',
                    action:'Action',
                    name:'Name',
                    subItems:[
                        {
                            action:'',
                            name:'Name',

                        },
                        {
                            action:'',
                            name:'Name',

                        },
                    ]

                }
            ]

        };
    },


    openDocument(document, openRedlined) {
        this.setState({
            openedDocument: document,
            //openRedlined: !!openRedlined
        });

    },

    openDocusign(document) {
        this.setState({
            docusignModalOpen: true,
            docusignDocumentId: document.id
        });
    },

    openRedlined(document) {
        this.setState({
            redliningDocumentId: document.id
        });
    },

    downloadDocument(document) {
        const url = `/files/${this.props.client.id}/${document.value}`;
        window.open(url, '_blank');
    },

    itemDndHandler(newIndex, oldIndex) {
        if (oldIndex === 0) return; // term sheet

        let documentationData = this.state.clientDocumentationData;

        // Move item in array
        documentationData.splice(newIndex, 0, documentationData.splice(oldIndex, 1)[0]);

    },

    render() {


        return (
            <div style={{marginTop:20}}>

                    <ButtonToolbar>
                        <Button
                            bsStyle="success"
                            onClick={e=>this.setState({showDocumentsModal:true})}
                        >
                            Add/Edit
                        </Button>
                        <Button
                            bsStyle="success"
                            target="_blank">
                            Send
                        </Button><Button
                            bsStyle="success"
                            target="_blank">
                            Download All
                        </Button>
                    </ButtonToolbar>

                <div className="clearfix">
                    <Spinner
                        spinnerName="circle"
                        style={{visibility:this.state.generatingProposalLetter?'visible':'hidden',float:'left'}}/>
                    <Spinner
                        spinnerName="circle"
                        style={{visibility:this.state.generatingDrafts?'visible':'hidden',float:'left'}}/>
                    <Spinner
                        spinnerName="circle"
                        style={{visibility:this.state.generatingDocs?'visible':'hidden',float:'left'}}/>
                </div>

                <DocumentationListHolder
                    items={this.state.documentList}
                    onDnd={this.itemDndHandler}
                />


                <DocumentsModal
                    show={this.state.showDocumentsModal}
                    onHide={()=>this.setState({showDocumentsModal:false})}
                    />



                {
                    this.state.showUploadModal &&
                    <FileUploadModal
                        path={`/clients/${this.props.client.id}/doc-new`}
                        tabId={3}
                        onUpload={this.forceRefreshDocumentationData}
                        onHide={this.setStateVarFunc('showUploadModal', false)}
                        title="Upload new document"
                    />
                }
                {
                    this.state.sendDocumentsModal &&
                    <SendDocuments
                        clientId={this.props.client.id}
                        docs={documentationItems}
                        onHide={this.setStateVarFunc('sendDocuments', false)}
                    />
                }


                {
                    this.state.openedDocument &&
                    <OfficeOnline
                        docId={this.state.openedDocument.id}
                        openRedlined={this.state.openRedlined}
                        clientId={this.props.client.id}
                        onHide={this.setStateVarFunc('openedDocument', null)}
                    />
                }

                {
                    this.state.docusignModalOpen &&
                    <DocusignModal
                        clientId={this.props.client.id}
                        documentId={this.state.docusignDocumentId}
                        show={this.state.docusignModalOpen}
                        onHide={() => {this.setState({docusignModalOpen: false}); this.forceRefreshDocumentationData()}}
                    />
                }
                {
                    this.state.redliningDocumentId &&
                    <RedliningModal
                        clientId={this.props.client.id}
                        documentId={this.state.redliningDocumentId}
                        onHide={() => this.setState({redliningDocumentId: null})}
                    />
                }
            </div>
        );
    }
});

module.exports = DocumentList;

/**
 * Created by levushka on 2/11/15.
 */