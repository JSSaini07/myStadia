const express = require('express');
const syncScreen = require('./utils/syncScreen');
const app = express();
require('express-ws')(app);

const STATIC_DIR = __dirname + '/../public';
let connectedClient = null;

app.use(express.static(STATIC_DIR));

app.get('/play', function(req, res) {
    res.sendFile("play.html", {root: STATIC_DIR});
});

app.ws('/connect', function(ws, req) {
    connectedClient = ws;
    syncScreen(connectedClient);
});

app.listen(8000);
