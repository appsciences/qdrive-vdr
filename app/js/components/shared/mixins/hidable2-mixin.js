var Hidable2Mixin = {

    hidableClickFunc: function(linkState) {
        return function(event) {
            linkState.requestChange(event.target.value);
        };
    }

};

module.exports = Hidable2Mixin;