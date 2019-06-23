'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _database = require('./database');

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storageDir = _path2.default.join(__dirname, '..', 'storage');

var storageConfig = _multer2.default.diskStorage({
    destination: function destination(req, file, cb) {
        cb(null, storageDir);
    },
    filename: function filename(req, file, cb) {
        cb(null, Date.now() + _path2.default.extname(file.originalname));
    }
});

var upload = (0, _multer2.default)({ storage: storageConfig });

var PORT = 4000;
var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);

app.use((0, _morgan2.default)('dev'));

app.use((0, _cors2.default)({
    exposedHeaders: "*"
}));

app.use(_bodyParser2.default.json({
    limit: '50mb'
}));

app.set('root', __dirname);
app.set('storageDir', storageDir);
app.set('upload', upload);

(0, _database.connect)(function (err, db) {

    if (err) {
        console.log("An error connecting to the database", err);
        throw err;
    }

    app.db = db;
    app.set('db', db);

    // init routers.
    new _router2.default(app);

    app.server.listen(process.env.PORT || PORT, function () {
        console.log('App is running on port ' + app.server.address().port);
    });
});

exports.default = app;
//# sourceMappingURL=index.js.map