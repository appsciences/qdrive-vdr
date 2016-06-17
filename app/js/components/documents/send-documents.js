const React = require('react');

const ReactBootstrap = require('react-bootstrap'),
	ButtonToolbar = ReactBootstrap.ButtonToolbar,
	Button = ReactBootstrap.Button,
	Label = ReactBootstrap.Label,
	Modal = ReactBootstrap.Modal;

const SendDocuments = React.createClass({
	propTypes: {
		docs: React.PropTypes.array.isRequired,
		clientId: React.PropTypes.number.isRequired
	},

	send() {
		let checkboxes = document.querySelectorAll('.send-documents-modal input[type=checkbox]:checked');

		let docs = [].reduce.call((checkboxes || []), (resultArr, node) => {
			return resultArr.concat(node.value.split(','));
		}, []);

		this.props.onHide();
	},

	setCheckboxesStatus(status){
		[].forEach.call(document.querySelectorAll('.send-documents-modal input[type=checkbox]'), checkbox => {
			checkbox.checked = status;
		});
	},

	render() {
		let docs = this.props.docs.reduce((resultArr, doc) => {
			if (doc.type === 'group') {
				let docs = doc.subItems.reduce((resultArr, doc) => {
					if (doc.document.id != null && !doc.document.waived) {
						return resultArr.concat(
							<div className="group">
								<div className="info">
										<span className="title">
											<input type="checkbox" value={doc.document.id}/>
											{doc.name}
										</span>
									<Label bsStyle={doc.labelStyle}>{doc.labelText}</Label>
								</div>
							</div>
						);
					}
					else return resultArr;
				}, []);

				if (docs.length) return resultArr.concat(
					<li className="list-group-item clearfix">
						<div className="group-name">{doc.name}</div>
						{docs}
					</li>
				);
			}
			else if (doc.document != null && !doc.document.waived) return resultArr.concat(
				<li className="list-group-item clearfix">
					<div className="info">
						<span className="title">
							<input type="checkbox" value={doc.document.id}/>
							{doc.name}
						</span>
						<Label bsStyle={doc.labelStyle}>{doc.labelText}</Label>
					</div>
				</li>
			);
			return resultArr;
		}, []);

		return (
			<Modal show={true} dialogClassName="send-documents-modal" bsSize="large" {...this.props}>
				<Modal.Header closeButton>
					<Modal.Title>Documents to send</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ButtonToolbar>
						<Button bsStyle="primary"
								onClick={()=>{this.setCheckboxesStatus(true)}}>Select all</Button>
						<Button bsStyle="primary"
								onClick={()=>{this.setCheckboxesStatus(false)}}>Unselect all</Button>
					</ButtonToolbar>
					<ul className="list-group documentation-list-holder">
						{docs}
					</ul>
					<Button bsStyle="primary" onClick={this.send}>Send</Button>
				</Modal.Body>
			</Modal>
		);
	}
});

module.exports = SendDocuments;