var React = require('react')
    , Spinner = require('react-spinkit');

const TicklerForm = require('./tickler-form');

var ReactBootstrap = require('react-bootstrap')
    , Modal = ReactBootstrap.Modal
    , ButtonToolbar = ReactBootstrap.ButtonToolbar
    , Button = ReactBootstrap.Button;

//TODO: Need to prompt to clear collection when No is clicked


var TicklerModal = React.createClass({


    render() {

        return (
            <Modal {...this.props} dialogClassName='tickler-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>{/*this.props.client.companyName*/}Add/Edit Tickler&nbsp;&nbsp;&nbsp;
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                            <TicklerForm
                            />
                </Modal.Body>
                <Modal.Footer>
                    <ButtonToolbar>
                        <Button bsStyle="primary" type="submit" onClick={this.props.onHide} name="saveButton" value="save">Save</Button>
                    </ButtonToolbar>
                </Modal.Footer>

            </Modal>
        );
    }
});

module.exports = TicklerModal;