var React = require('react')
    , Spinner = require('react-spinkit');

const PartiesForm = require('./parties-form');

var ReactBootstrap = require('react-bootstrap')
    , Modal = ReactBootstrap.Modal
    , Button = ReactBootstrap.Button;

//TODO: Need to prompt to clear collection when No is clicked


var PartiesModal = React.createClass({


    render() {

        return (
            <Modal {...this.props} dialogClassName='info-sheet-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>{/*this.props.client.companyName*/}Documents&nbsp;&nbsp;&nbsp;
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                            <PartiesForm
                            />
                </Modal.Body>
            </Modal>
        );
    }
});

module.exports = PartiesModal;