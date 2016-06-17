const request = require('superagent');

const OfacApi = {
    searchByName(keyPhrase) {
        return new Promise((resolve, reject) => {
            request
                .get(`/ofac?q=${keyPhrase}&l=50`)
                .end((e, res) => {
                    if (e) reject(e);
                    else resolve(res.body);
                });
        });
    },

    findOne(uid) {
        return new Promise((resolve, reject) => {
            request
                .get(`/ofac/${uid}`)
                .end((e, res) => {
                    if (e) reject(e);
                    else resolve(res.body);
                });
        });
    }
};

module.exports = OfacApi;