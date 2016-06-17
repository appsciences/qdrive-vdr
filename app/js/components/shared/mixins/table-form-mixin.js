const ReactUtils = require('./../utils/react-utils'),
      _ = require('lodash');

const TableFormMixin = {

    saveItemFunc(collectionName, fields) {
        if (!fields || !fields.length) {
            console.error('no fields passed to table form mixin for collection "%s"', collectionName);
        }

        if (!collectionName) {
            console.error('no collection name passed to table form mixin');
        }

        return () => {
            let state = {};
            let collection = this.state[collectionName];

            if (this.state.editIndex) {
                state[collectionName] = collection;
                state[collectionName][this.state.editIndex] = _.pick(this.state, fields);
                this.state.editIndex = null;
            } else {
                state[collectionName] = collection.concat(_.pick(this.state, fields));
            }

            fields.forEach(f => state[f] = null);

            this.setState(state);
        }
    },

    editItemFunc(collectionName, fields) {
        if (!collectionName) {
            console.error('no collection name passed to table form mixin');
        }

        return (index) => {
            let state = {};
            let collection = this.state[collectionName];

            state.editIndex = index;

            fields.forEach((field) => {
                state[field] = collection[index][field];
            });

            this.setState(state);
        }
    },

    removeItemFunc(collectionName) {
        if (!collectionName) {
            console.error('no collection name passed to table form mixin');
        }

        return (index) => {
            var state = {};
            state[collectionName] = ReactUtils.removeItemAtIndex(this.state[collectionName], index);
            this.setState(state);
        };
    },

    validateColumnSpecsFunc(validFields) {
        if (!validFields || !validFields.length) {
            console.error('Column spec -- no fields to validate');
        }

        return colSpecs => {
            //only validate in DEV
            if (process.env.NODE_ENV === "production") {
                return colSpecs;
            }

            if (!colSpecs || !colSpecs.length) {
                console.error('No collection spec to validate');
            }

            colSpecs.forEach(spec => {
                if (validFields.indexOf(spec.key) == -1) {
                    console.error('Validating react table column specs: field "%s" not in group %o', spec.key, validFields);
                }
            });

            return colSpecs;
        }
    },

    /**
     * @param collectionNames - array of strings or arrays (for subgroups)
     * @param fieldSpecs
     * @returns {*}
     */
    getCollections(collectionNames, fieldSpecs) {
        if (process.env.NODE_ENV !== "production") {
            if (!collectionNames || !collectionNames.length) {
                console.error('no collections passed to getCollections');
                return null;
            }

            if (!fieldSpecs || !fieldSpecs.length) {
                console.error('no field spec passed to getCollections');
                return null;
            }
        }

        return collectionNames.reduce((result, collectionName) => {
            var collectionFields = this.fieldsForGroup(collectionName, fieldSpecs);

            if (process.env.NODE_ENV !== "production" && !this.state[collectionName]) {
                console.error('getCollections: collection "%s" is not in state', collectionName);
            }

            result[collectionName] = {
                data: this.state[collectionName],
                onAddItem: this.saveItemFunc(collectionName, collectionFields),
                onEditItem: this.editItemFunc(collectionName, collectionFields),
                isEditing: () => !!this.state.editIndex,
                onRemoveItem: this.removeItemFunc(collectionName),
                validateColumnSpecs: this.validateColumnSpecsFunc(collectionFields)
            };

            return result;
        }, {});
    },

    fieldsForGroup(groupName, fieldSpecs) {
        //TODO: This returns multiple instances of the same field when it's in multiple groups
        var fields = fieldSpecs.reduce((result, spec) =>
                spec.groupName === groupName && result.indexOf(spec.fieldName) === -1 ?
                    result.concat(spec.fieldName) : result,
            []
        );

        fields.length || console.error("Field Group '%s' not found in field spec", groupName);

        return fields;
    }
};

module.exports = TableFormMixin;