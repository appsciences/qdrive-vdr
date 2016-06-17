let React = require("react");

let ReactBootstrap = require("react-bootstrap"),
    Modal = ReactBootstrap.Modal,
    Button = ReactBootstrap.Button;


const DeleteModal = React.createClass({
    propTypes: {
        children: React.PropTypes.element.isRequired,
        onYes: React.PropTypes.func.isRequired,
        onCancel: React.PropTypes.func.isRequired,
        title: React.PropTypes.string
    },

    render() {
        return (
            <Modal show={true} dialogClassName="confirm-modal text-center" bsSize="small" {...this.props}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {this.props.title || "Confirmation"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.children}
                    <br />
                    <Button bsStyle="default" style={{margin: "5px"}}
                            onClick={() => {this.props.onHide(); this.props.onYes()}}>
                        Yes
                    </Button>
                    <Button bsStyle="primary" style={{margin: "5px"}}
                            onClick={() => {this.props.onHide(); this.props.onCancel()}}>
                        No
                    </Button>
                </Modal.Body>
            </Modal>
        );
    }
});

module.exports = DeleteModal;