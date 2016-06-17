var _ = require('lodash');
var formUtils = {

    /**
     *
     *function to flatten state carrying compound form values into a savable flat collection
     *this is necessary due to current limitations of linkState -- it only works with top level state members
     * @param compoundCollection
     * @returns {*}
     */

    flatten: function (compoundCollection) {

        var toFieldSpecFunc = function (valGroupId, parentValueGroupId) {

            return function (result, val, key) {

                if (!Array.isArray(val)) {
                    return result.concat({fieldName: key, value: val, valueGroupId: valGroupId, parentValueGroupId });
                } else {

                    //process child group, they have '-' in the name, followed by parent group id

                    if(key.indexOf('-') > -1){
                        var z = 0;
                    }

                    const parentGroupId = key.indexOf('-') > -1 ? key.charAt(key.length -1) : null;

                    val.forEach((row, i) => result = result.concat(_.reduce(row, toFieldSpecFunc(i, parentGroupId), [])));
                    return result;
                }
            }
        };

        return _.reduce(compoundCollection, toFieldSpecFunc(null, null), [])
    },

    //pass a processor function for additional processing
    toSelectOptions: function(arr, labelProcessor){
        if (!labelProcessor) {
            labelProcessor = (item) => item;
        }


        return arr.map(o => ({label:labelProcessor(o), value:o}));
    }

};

module.exports = formUtils;


/**
 * Created by levushka on 1/18/15.
 */
