const React = require('react');

const Spinner = require('react-spinkit');

const Bootstrap = require('react-bootstrap'),
    Modal = Bootstrap.Modal,
    Button = Bootstrap.Button;

const RedliningModal = React.createClass({
    propTypes: {
        clientId: React.PropTypes.number.isRequired,
        documentId: React.PropTypes.number.isRequired
    },

    getInitialState() {
        return {
            resultGuid: null
        };
    },

    componentDidMount() {
        request
            .get(`clients/${this.props.clientId}/redline?documentId=${this.props.documentId}`)
            .end((err, res) => {
                this.setState({
                    resultGuid: res.body.guid
                });
            });
    },

    render() {
        return (
            <Modal show={true} bsSize="large" dialogClassName="redlining-modal" {...this.props}>
                <Modal.Header closeButton>
                    <Modal.Title>Redlining</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="redlining-modal-frame-holder">
                        {
                            !this.state.resultGuid ?
                                <Spinner />
                                :
                                <iframe
                                    src={'https://apps.groupdocs.com/document-viewer/Embed/' + this.state.resultGuid}
                                >
                                </iframe>
                        }
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
});

module.exports = RedliningModal;