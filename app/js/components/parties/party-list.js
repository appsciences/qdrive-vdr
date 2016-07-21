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
    Table = ReactBootstrap.Table,
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
                            name:'John Smith',
                    company:'Black Rock',
                    function:'Borrower'

                        },
                        {

                            name:'Laura Alvarez',
                            company: 'JPMorgan',
                            function: 'Agent'

                        },
                        {
                            name:'Sean Murphy',
                            company: 'RBC',
                            function: 'Lender'

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
                            Add
                        </Button>

                    </ButtonToolbar>

                <div className="clearfix">
                    <Spinner
                        spinnerName="circle"
                        style={{visibility:this.state.generatingProposalLetter?'visible':'hidden',float:'left'}}/>
                </div>
<Table striped>
                {this.state.documentList.map(party =>
                    <tr >
                        <td style={{paddingTop:15}}>{party.name}</td>
                        <td style={{paddingTop:15}}>{party.company}</td>
                        <td style={{paddingTop:15}}>{party.function}</td>
                        <td style={{paddingTop:15}}> <Button
                            bsStyle="primary"
                        >
                            Edit
                        </Button></td>

                    </tr>)}
</Table>
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