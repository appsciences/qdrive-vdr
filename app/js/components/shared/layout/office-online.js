let React = require('react'),
	ReactBootstrap = require('react-bootstrap'),
	Modal = ReactBootstrap.Modal,
	Button = ReactBootstrap.Button;

// Unique ID for iframes
let officeFrameId = 0;

let OfficeOnline = React.createClass({
	propTypes: {
		docId: React.PropTypes.string.isRequired,
		clientId: React.PropTypes.string.isRequired,
        openRedlined: React.PropTypes.bool,
		open: React.PropTypes.bool,
		onClose: React.PropTypes.func
	},

	getInitialState() {
		return {
			officeFrameId: 'office-online-' + (++officeFrameId),
			access_token: '',
			access_token_ttl: ''
		};
	},

	componentDidMount() {
		this.open();
	},

	close() {
		this.setState({
			access_token: '',
			access_token_ttl: ''
		});

		this.props.onHide && this.props.onHide();
	},

	open() {
		request
			.post(`clients/${this.props.clientId}/wopi-token`)
			.send({
                docId: this.props.docId,
                openRedlined: this.props.openRedlined
            })
			.end((err, res) => {
				if (err) console.error(err);
				else {
					this.setState(res.body);
					this.submitForm();
				}
			});
	},

	submitForm() {
		if (this.state.access_token) {
            let officeFrame = document.createElement('iframe');
            officeFrame.name = this.state.officeFrameId;
            officeFrame.id = this.state.officeFrameId;
            this.refs['officeFrameHolder'].appendChild(officeFrame);

            this.refs['officeForm'].submit();
		}
	},

	render() {
		return (
			<Modal show={true} dialogClassName="office-online-modal">
				<div className="close-button" onClick={this.close}>x</div>
				<form ref="officeForm"
					  action={this.state.action_url}
					  target={this.state.officeFrameId}
					  method="post">
					<input name="access_token" value={this.state.access_token} type="hidden"/>
					<input name="access_token_ttl" value={this.state.access_token_ttl} type="hidden"/>
				</form>
				<div className="office-online-frame-holder" ref="officeFrameHolder">
				</div>
			</Modal>
		);
	}
});

module.exports = OfficeOnline;
