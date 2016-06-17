const request = require('superagent');

const APP_TOKEN = 'roKwj0fb9wjta8Cr7f4l15GfV';

const CorporateStatusApi = {
    searchByName(keyPhrase) {
        return new Promise((resolve, reject) => {
            request
                .get(`https://data.ny.gov/resource/vz7i-btsq.json?$$app_token=roKwj0fb9wjta8Cr7f4l15GfV` +
                    `&$select=current_entity_name, dos_id&$limit=50` +
                    `&$where=current_entity_name like '%25${encodeURIComponent(keyPhrase.toUpperCase())}%25'`)
                .end((e, res) => {
                    if (e) reject(e);
                    else resolve(res.body);
                });
        });
    },

    findOne(dos_id) {
        return new Promise((resolve, reject) => {
            request
                .get(`https://data.ny.gov/resource/vz7i-btsq.json?$$app_token=${APP_TOKEN}` +
                    `&dos_id=${dos_id}`)
                .end((e, res) => {
                    if (e) reject(e);
                    else resolve(res.body[0]);
                });
        });
    }
};

module.exports = CorporateStatusApi;