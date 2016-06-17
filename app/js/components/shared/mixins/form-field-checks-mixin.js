var _ = require('lodash');

var formFieldsChecksMixin = {
    validateFieldName(fieldName, fields, skipMultiCheck) {

        //only validate in DEV
        if (process.env.NODE_ENV === "production") {
            return fieldName;
        }

        if(_.isUndefined(fields[fieldName])) {
            console.warn( 'Validating fields %o. Unknown field name "%s"', fields, fieldName);
        }

        if(!skipMultiCheck){
            this.validatedFields = this.validatedFields || [];

            if( this.validatedFields.indexOf(fieldName) > -1){
                console.warn( 'Validating fields: Duplicated field "%s"', fieldName);
            }

            this.validatedFields = this.validatedFields.concat(fieldName);
        }

        return fieldName;
    },

    checkForUnusedFields(){
        //only validate in DEV
        if (process.env.NODE_ENV === "production") {
            return true;
        }

        var diff = _.difference(
            Object.keys(_.omit(
                this.state,
                Array.isArray )
            ),
            this.validatedFields);

        if (diff.length){
            console.warn('Found unused fields: %o', diff)
        }
    },

    getLinkStateWithFieldChecks(fieldName, skipRedundancyCheck) {
        //only validate in DEV
        if (process.env.NODE_ENV === "production") {
            return this.linkState(fieldName);
        }

        return this.linkState(this.validateFieldName(fieldName, this.state, skipRedundancyCheck));
    },

    killFieldChecks() {
        this.getLinkStateWithFieldChecks = this.linkState;
    }

};

module.exports = formFieldsChecksMixin;
/**
 * Created by levushka on 1/18/15.
 */
