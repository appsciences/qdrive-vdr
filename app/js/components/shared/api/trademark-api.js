const request = require('superagent');

const TrademarkApi = {
    searchByName(keyPhrase) {
        return new Promise((resolve, reject) => {
            request
                .get(`/trademark?q=${keyPhrase}&l=50`)
                .end((e, res) => {
                    if (e) reject(e);
                    else resolve(res.body);
                });
        });
    },

    getTrademark(partyName) {
        return new Promise((resolve, reject) => {
            request
                .get(`/trademark/group?party=${partyName}`)
                .end((e, res) => {
                    if (e) reject(e);
                    else resolve(res.body);
                });
        });
    }
};

module.exports = TrademarkApi;