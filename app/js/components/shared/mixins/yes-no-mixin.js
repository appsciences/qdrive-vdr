var YesNoMixin = {

    yesNoClickFunc: function(getLinkState, fieldName) {
        return function(event) {
            getLinkState(fieldName).requestChange(event.target.value === 'true');
        };
    }

};

module.exports = YesNoMixin;