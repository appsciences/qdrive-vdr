var StateToolsMixin = {

    setStateVar: function(stateVarName, val){
        var state = {};
        state[stateVarName] = val;
        this.setState(state);
    },

    setStateVarFunc: function(stateVarName, val){
        return function(){
            this.setStateVar(stateVarName, val);
        }.bind(this);
    },

    setStateVarFromSelectFunc: function(stateVar){
        return function(value){
            this.setStateVar(stateVar, value);
        }.bind(this);
    }

};

module.exports = StateToolsMixin;