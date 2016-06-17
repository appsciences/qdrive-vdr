const React = require('react');

const ReactBootstrap = require('react-bootstrap'),
	Input = ReactBootstrap.Input,
	Button = ReactBootstrap.Button,
	Modal = ReactBootstrap.Modal;

const store = require('../../store/store');

const FileRenameModal = React.createClass({
	propTypes: {
		fileId: React.PropTypes.number.isRequired,
		clientId: React.PropTypes.number.isRequired,
		onUpdate: React.PropTypes.func
	},

	changeName() {
		let fileName = document.querySelector('.file-rename-modal input[type=text]').value;
		if (fileName) {
			store.update(`clients/${this.props.clientId}/client-details-data`, {
				type: 'rename',
				data: {
					id: this.props.fileId,
					additionalName: fileName
				}
			});

			this.props.onHide();
		}
	},

	render() {
		return (
			<Modal show={true} dialogClassName="file-rename-modal text-center" bsSize="small" {...this.props}>
				<Modal.Header closeButton>
					<Modal.Title>Change file name</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Input type="text" placeholder="Type new name"/>
					<Button bsStyle="primary" onClick={this.changeName}>Rename</Button>
				</Modal.Body>
			</Modal>
		);
	}
});

module.exports = FileRenameModal;