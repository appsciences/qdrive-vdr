const React = require('react');

const ReactBootstrap = require('react-bootstrap'),
    Button = ReactBootstrap.Button,
    Modal = ReactBootstrap.Modal;


const UnderConstructionModal = React.createClass({
    propTypes: {
        show: React.PropTypes.bool.isRequired,
        onHide: React.PropTypes.func.isRequired

    },

    render() {
        return (
            <Modal show={this.props.show}
                   bsSize="small"
                   onHide={this.props.onHide}>
                <Modal.Body>
                    This feature is under construction
                    <div style={{textAlign:'center', marginTop:20}}>
                    <Button bsStyle="primary"
                            onClick={this.props.onHide}>OK</Button>
                        </div>

                </Modal.Body>
            </Modal>
        );
    }
});

module.exports = UnderConstructionModal;