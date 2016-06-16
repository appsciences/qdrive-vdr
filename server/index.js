'use strict';

const path = require('path'),
    express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.sendFile(path.resolve('build/index.html'));
});

app.use(express.static(path.resolve('build'), {
    index: false
}));

app.listen(3001, function() {
    console.info('Listening on port:', this.address().port);
});
