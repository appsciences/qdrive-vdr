const React = require("react");

const FileUploadButton = React.createClass({
    propTypes: {
        path: React.PropTypes.string.isRequired,
        onUpload: React.PropTypes.func,
        dropDownItem: React.PropTypes.bool,
        title: React.PropTypes.string,
        params: React.PropTypes.object
    },

    getInitialState() {
        return {
            btnTitle: this.props.title || "Upload"
        }
    },

    selectFileHandler(event) {
        this.setState({
            btnTitle: "..."
        });

        /* Uploading mulipart form with file to server */

        const file = event.target.files[0];

        let formData = new FormData();
        formData.append("file", file, file.name.replace(/\s/g, "_"));

        if (this.props.params) {
            Object.keys(this.props.params).forEach((paramName) => {
                formData.append(paramName, this.props.params[paramName]);
            });
        }

        request
            .post(this.props.path)
            .send(formData)
            .end((err, res) => {
                if (err) {
                    console.log("Error: " + err);
                } else {
                    setTimeout(() => {
                        this.setState({
                            btnTitle: this.props.title || "View"
                        });

                        this.props.onUpload && this.props.onUpload(res.body);
                    }, 1000);
                }
            });
    },

    render() {
        if (this.props.dropDownItem) {
            return (
                <li role="presentation">
                    <a role="menuitem" href="" style={{position: "relative"}}>
                        {this.state.btnTitle}
                        <input type="file"
                               className="hidden-file-input"
                               onChange={this.selectFileHandler}/>
                    </a>
                </li>
            );
        }

        return (
            <div className="btn btn-primary" style={{position: "relative"}}>
                {this.state.btnTitle}
                <input type="file"
                       className="hidden-file-input"
                       onChange={this.selectFileHandler}/>
            </div>
        );
    }
});

module.exports = FileUploadButton;