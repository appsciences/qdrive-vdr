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

const DocumentationListHolder = require('../shared/layout/list-holder');

const DocumentsModal = require('./tickler-modal');

const DocumentList = React.createClass({

    propTypes: {
    },

    getInitialState(){

        const action = (
            <Button
                bsStyle="primary"
                onClick={e=>this.setState({showDocumentsModal:true})}
                >Edit</Button>);

        return {
            showDocumentsModal: false,
            showDocusignModal: false,
            showSendDocumentsModal: false,
            documentList: [
                {
                    action,
                    responsibility: 'Due Aug 15, 2016',

                    //style: {fontWeight:'normal'},
                    name:'Quarterly Financial Statements',

                },
                {
                    action,
                    responsibility: 'Due Nov 7, 2016',

                    //style: {fontWeight:'normal', color:'grey'},
                    name:'Evidence of Insurance Renewal',

                },
                {
                    action,
                    responsibility: 'Due March 30, 2017',
                    //style: {fontWeight:'normal', color:'red'},
                    name:'Audited Financial Statements'

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
                        bsStyle="primary"
                        onClick={e=>this.setState({showDocumentsModal:true})}
                        >
                        Add/Edit
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

            </div>
        );
    }
});

module.exports = DocumentList;

/**
 * Created by levushka on 2/11/15.
 */