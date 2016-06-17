var DisplayMixin = {
    showIf: function(vals){

        for (var name in vals ){
            if(this.props.getLinkState(name,true).value != vals[name])
                return {display: 'none'};
        }
        return {display: 'block'}
    },
    //TODO: Hack, need to combine
    showIfOr: function(vals){

        for (var name in vals ){
            if(Array.isArray(vals[name])) {
                if (vals[name].indexOf(this.props.getLinkState(name, true).value) > -1){
                    return {display: 'block'};
                }
            }else {
                if (this.props.getLinkState(name, true).value == vals[name])
                    return {display: 'block'};
            }
        }
        return {display: 'none'};
    },

    showIfMulti: function(vals){

        for (var name in vals ){
            if(typeof(this.props.getLinkState(name,true).value) == 'string'
                && this.props.getLinkState(name,true).value.indexOf(vals[name]) > -1) {
                    return {display: 'block'};
            }
        }
        return {display: 'none'}
    },

};



module.exports = DisplayMixin;