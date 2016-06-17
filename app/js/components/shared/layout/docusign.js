const React = require('react'),
	ReactBootstrap = require('react-bootstrap'),
	Modal = ReactBootstrap.Modal,
    Spinner = require('react-spinkit'),
    Button = ReactBootstrap.Button;

// Unique ID for iframes
let frameId = 0;

let DocuSignModal = React.createClass({
	propTypes: {
		docId: React.PropTypes.number.isRequired,
		clientId: React.PropTypes.number.isRequired,
		onHide: React.PropTypes.func
	},

	getInitialState() {
		return {
			frameId: 'docusign' + (++frameId),
		};
	},

	componentDidMount() {
			request
				.get(`clients/${this.props.clientId}/docusign/url/${this.props.documentId}`)
				.end((err, res) => {
					if (err) {
						console.error(err);
					} else {
						this.setState(res.body);
					}
			});
	},

	render() {

		return (
			<Modal onHide={this.props.onHide} show={this.props.show} dialogClassName="office-online-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Sign Document
                    </Modal.Title>
                </Modal.Header>
                <Spinner spinnerName='three-bounce'
                         noFadeIn
                         className={this.state.url ? 'hidden' : ''}/>


                {
                    this.state.url &&
                    <div className="office-online-frame-holder">
                        <iframe id={this.state.frameId} name={this.state.frameId} src={this.state.url}></iframe>
                    </div>
                }
			</Modal>
		);
	}
});

module.exports = DocuSignModal;
