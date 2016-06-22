var React = require('react')
    , Spinner = require('react-spinkit');

const PartiesForm = require('./parties-form');

var ReactBootstrap = require('react-bootstrap')
    , Modal = ReactBootstrap.Modal
    , ButtonToolbar = ReactBootstrap.ButtonToolbar
    , Button = ReactBootstrap.Button;

//TODO: Need to prompt to clear collection when No is clicked


var PartiesModal = React.createClass({


    render() {

        return (
            <Modal {...this.props}>
                <Modal.Header closeButton>
                    <Modal.Title>{/*this.props.client.companyName*/}Add/Edit Party&nbsp;&nbsp;&nbsp;
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                            <PartiesForm
                            />
                </Modal.Body>
                <Modal.Footer>
                    <ButtonToolbar>
                        <Button bsStyle="primary" title="Import from Outlook or CRM" form="clientForm" name="importButton" value="import">Import</Button>
                        <Button bsStyle="primary" type="submit" onClick={this.onHide} name="saveButton" value="save">Save</Button>
                    </ButtonToolbar>
                </Modal.Footer>
            </Modal>
        );
    }
});

module.exports = PartiesModal;