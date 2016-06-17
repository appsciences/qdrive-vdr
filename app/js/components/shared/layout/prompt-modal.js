const React = require("react");

const ReactBootstrap = require("react-bootstrap"),
    Input = ReactBootstrap.Input,
    Button = ReactBootstrap.Button,
    Modal = ReactBootstrap.Modal;

const PromptModal = React.createClass({
    propTypes: {
        path: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        onUpload: React.PropTypes.func,
        btnName: React.PropTypes.string,
        inputDescription: React.PropTypes.string
    },

    submitHandler() {

                    this.props.onHide();
    },

    render() {
        return (
            <Modal show={true} dialogClassName="prompt-modal text-center" bsSize="small" {...this.props}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {this.props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input type="text" placeholder={this.props.inputDescription || "Specify name"}/>
                    <Button bsStyle="primary" onClick={this.submitHandler}>
                        {this.props.btnName || "Submit"}
                    </Button>
                </Modal.Body>
            </Modal>
        );
    }
});

module.exports = PromptModal;