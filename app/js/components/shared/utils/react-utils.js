var update = require('react-addons-update');

var ReactUtils = {

    removeItemAtIndex: function(arr, index){
        return update(
            arr,
            {$splice: [[index, 1]]}
        );
    }

};

module.exports = ReactUtils;
