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

const ListHolder = require('../shared/layout/list-holder');

const PartiesModal = require('./parties-modal');

const PartyList = React.createClass({

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
            documentList: [
                {
                    type:'group',
                    action:'',
                    name:'Borrowers',
                    subItems:[
                        {
                            action,

                            name:'Arya Stark, Arya Cleaning Supplies, Inc.',

                        },
                        {
                            action,

                            name:'George Stephanapoulos, Baelish Entertainment, LLC',

                        },
                        {
                            action,
                            name:'Josephine Mendoza, Cersei Wines, Inc.',

                        }

                    ]

                }
            ]

        };
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

                <ListHolder
                    items={this.state.documentList}
                    onDnd={this.itemDndHandler}
                />


                <PartiesModal
                    show={this.state.showDocumentsModal}
                    onHide={()=>this.setState({showDocumentsModal:false})}
                    />

            </div>
        );
    }
});

module.exports = PartyList;

/**
 * Created by levushka on 2/11/15.
 */