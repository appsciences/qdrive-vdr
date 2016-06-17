var React = require('react');

var ReactBootstrap = require('react-bootstrap'),
    Panel = ReactBootstrap.Panel;

var WelcomePanel = React.createClass({

    render() {

        return (
            <Panel>
                <p>Thank you for considering us for your financing needs. Please help us learn more about your company by filling out the Information Sheet and uploading the balance of the documents listed on the right side of your screen.</p>
                <p>Please note that you don't need to complete the Information Sheet in one sitting. You can close the Information Sheet at any point and return to it later. The information you have already entered will be saved and the form will be ready to receive new information.</p>
                <p>When you have completed the Information Sheet you may sign it electronically and submit it to us by simply clicking Submit.</p>
                <p>Should you have any questions please do not hesitate to contact { this.props.account.name } by phone at { this.props.account.phone } or email at { this.props.account.email }</p>
            </Panel>
        );
    }
});

module.exports = WelcomePanel;

/**
 * Created by levushka on 2/11/15.
 */
