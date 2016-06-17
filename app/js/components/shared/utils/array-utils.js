
const ObjectUtils = {
    /* filter array (items can be subArrays) */
    mixedArrayFilter(array, checkFunc) {
        let filteredArray = [];

        array.forEach((item) => {
            // if have subItems filter subItems
            if (Array.isArray(item)) {
                let filteredSubItems = [];

                item.forEach((subDoc) => {
                    if (checkFunc(subDoc)) filteredSubItems.push(subDoc);
                });

                // skip if have no subItems after filter
                filteredSubItems.length && filteredArray.push(filteredSubItems);
            } else {
                if (checkFunc(item)) filteredArray.push(item);
            }
        });

        return filteredArray;
    }
};

module.exports = ObjectUtils;