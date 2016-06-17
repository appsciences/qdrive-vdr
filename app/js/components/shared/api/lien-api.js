const request = require('superagent');

const LienApi = {
    search(state, keyPhrase) {
        return new Promise((resolve, reject) => {
            request
                .get(`/lien?state=${state}&q=${keyPhrase}`)
                .end((err, res) => {
                    if (err) reject(err);
                    else resolve(res.body);
                });
        });
    }
};

module.exports = LienApi;