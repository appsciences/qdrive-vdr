var React = require('react')
    , Spinner = require('react-spinkit');

const DocumentsForm = require('./documents-form');

var ReactBootstrap = require('react-bootstrap')
    , Modal = ReactBootstrap.Modal
    , ButtonToolbar = ReactBootstrap.ButtonToolbar
    , Button = ReactBootstrap.Button;

//TODO: Need to prompt to clear collection when No is clicked


var DocumentsModal = React.createClass({


    render() {

        return (
            <Modal {...this.props} dialogClassName='info-sheet-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>{/*this.props.client.companyName*/}Documents&nbsp;&nbsp;&nbsp;
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                            <DocumentsForm
                            />
                </Modal.Body>
                <Modal.Footer>
                    <ButtonToolbar>
                        <Button bsStyle="primary" type="submit" onClick={this.onHide} name="saveButton" value="save">Save</Button>
                    </ButtonToolbar>
                </Modal.Footer>

            </Modal>
        );
    }
});

module.exports = DocumentsModal;