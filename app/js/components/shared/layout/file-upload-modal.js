const React = require("react");

const ReactBootstrap = require("react-bootstrap"),
      Input = ReactBootstrap.Input,
      Button = ReactBootstrap.Button,
      Modal = ReactBootstrap.Modal;

const FileUploadModal = React.createClass({
    propTypes: {
        path: React.PropTypes.string.isRequired,
        tabId: React.PropTypes.number.isRequired,
        onUpload: React.PropTypes.func,
        title: React.PropTypes.string,
        fileNameDescription: React.PropTypes.string
    },

    getInitialState() {
        return {
            btnTitle: "Upload"
        }
    },

    uploadFile() {
        const documentName = document.querySelector(".upload-file-modal input[type=text]").value;
        const file = document.querySelector(".upload-file-modal input[type=file]").files[0];

        let formData = new FormData();
        formData.append("file", file, file.name.replace(/\s/g, "_"));
        formData.append("documentName", documentName);
        formData.append('tabId', this.props.tabId);

        this.setState({
            btnTitle: "..."
        });

        request
            .post(this.props.path)
            .send(formData)
            .end((error) => {
                if (error) {
                    console.log("Error: " + error);
                } else {
                    this.props.onUpload && this.props.onUpload();
                    this.props.onHide();
                }
            });
    },

    render() {
        return (
            <Modal show={true} dialogClassName="upload-file-modal text-center" bsSize="small" {...this.props}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {this.props.title || "Upload file"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input type="file"/>
                    <Input type="text" placeholder={this.props.fileNameDescription || "Specify document name"}/>
                    <Button bsStyle="primary" onClick={this.uploadFile}>
                        {this.state.btnTitle}
                    </Button>
                </Modal.Body>
            </Modal>
        );
    }
});

module.exports = FileUploadModal;