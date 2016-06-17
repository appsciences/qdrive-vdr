var React = require('react')
    , formUtils = require('./../utils/form-utils');

var _ = require('lodash');

var ReactBootstrap = require('react-bootstrap')
    , Panel = ReactBootstrap.Panel
    , Glyphicon = ReactBootstrap.Glyphicon
    , OverlayTrigger = ReactBootstrap.OverlayTrigger
    , Popover = ReactBootstrap.Popover
    , Input = ReactBootstrap.Input
    , Button = ReactBootstrap.Button
    , ButtonToolbar = ReactBootstrap.ButtonToolbar;


var Reactable = require('reactable'),
    Table = Reactable.Table;

var TableForm = React.createClass({

    propTypes: {
        omitPanel: React.PropTypes.bool,
        collection: React.PropTypes.object.isRequired,
        columns: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
        addMore: React.PropTypes.bool,
        addMoreColumns: React.PropTypes.arrayOf(React.PropTypes.object),
        addMoreColumnsFactory: React.PropTypes.func,
        title: React.PropTypes.string
    },

    onRemoveItem: function (event) {
        this.props.collection.onRemoveItem(event.currentTarget.value);
    },

    onEditItem: function(event) {
        this.props.collection.onEditItem(event.currentTarget.value);
    },

    moreLink: function (obj, columns) {
        var popOver = (
            <Popover style={{overflowY: 'auto', overflowX: 'hidden', maxHeight: '100%'}} id='tableMorePopOver'>
                <table>
                    <tbody>
                    {
                        columns.map(col =>
                            <tr>
                                <td style={{textAlign:'right', padding:5}}>
                                    {col.label}:&nbsp;
                                </td>
                                <td style={{padding:5, width: 250}}
                                    className={col.key}
                                    onClick={ this.editField }>
                                    {obj[col.key]}
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </Popover>
        );

        return (
            <OverlayTrigger trigger='click' rootClose placement='left' overlay={popOver}>
                <div className="popover-more" style={{cursor: "pointer"}}>more...</div>
            </OverlayTrigger>
        );

    },


    render() {
        if (!this.props.columns.length) {
            console.error('Empty columns passed to "%s"" TableForm', this.props.title)
        }

        if (!this.props.collection.data) {
            console.error('Collection data is null for "%s" TableForm', this.props.title);
            return null;
        }

        //add a delete button to columns. Also optionally add the more column.
        var columns = [
            {key: 'actionButtons', style: {width: '115px'}, label: ''}
        ].concat(this.props.columns);

        //add more link and delete button
        var rows = this.props.collection.data.map((row, i) => {
            var newRow = Object.assign({}, row);

            if (this.props.addMore) {
                if ((this.props.addMoreColumns && this.props.addMoreColumns.length) || this.props.addMoreColumnsFactory) {
                    let addMoreColumns = this.props.addMoreColumns || this.props.addMoreColumnsFactory(row);

                    if (addMoreColumns.length) {
                        newRow.more = this.moreLink(row, addMoreColumns);
                    }
                } else {
                    console.error('Empty "add more" columns passed or addMoreColumnsFactory not specified ' +
                        'despite setting "add more flag"')
                }
            }

            newRow.actionButtons = (
                <ButtonToolbar>
                    <Button bsStyle="danger" value={i} onClick={this.onRemoveItem}>
                        <Glyphicon glyph="remove"/>
                    </Button>
                    <Button value={i} onClick={this.onEditItem}>
                        <Glyphicon glyph="pencil"/>
                    </Button>
                </ButtonToolbar>
            );

            _.forIn(newRow, (value, prop) => {
                if (typeof value === "boolean") {
                    newRow[prop] = value ? 'yes' : 'no';
                }
            });

            return newRow;
        });

        if (this.props.addMore)
            columns = columns.concat({key: 'more', label: ''});

        var content = <div id={this.props.id}>
            {this.props.children}
            <Button bsStyle="primary" onClick={this.props.collection.onAddItem}>
                {this.props.collection.isEditing() ? 'Save' : 'Save/Add'}
            </Button>
            <Table
                style={rows.length ? {} : {display: 'none'}}
                className="table table-striped table-condensed"
                columns={columns}
                data={rows}>
            </Table>
        </div>;

        if (this.props.omitPanel) {
            return content;
        } else {
            return (
                <Panel header={<label>{this.props.title}</label>}>
                    {content}
                </Panel>
            )
        }
    }
});

module.exports = TableForm;