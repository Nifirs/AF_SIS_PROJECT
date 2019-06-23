'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _package = require('../package.json');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _file = require('./models/file');

var _file2 = _interopRequireDefault(_file);

var _mongodb = require('mongodb');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppRouter = function () {
    function AppRouter(app) {
        _classCallCheck(this, AppRouter);

        this.app = app;
        this.setupRouters();
    }

    _createClass(AppRouter, [{
        key: 'setupRouters',
        value: function setupRouters() {

            var app = this.app;
            var db = app.get('db');
            var uploadDir = app.get('storageDir');
            var upload = app.get('upload');

            app.get('/', function (req, res, next) {

                return res.status(200).json({
                    version: _package.version
                });
            });

            app.post('/api/upload', upload.array('files'), function (req, res, next) {
                var files = _lodash2.default.get(req, 'files', []);

                var fileModels = [];

                _lodash2.default.each(files, function (fileObject) {
                    var newFile = new _file2.default(app).initWithObject(fileObject).toJSON();
                    fileModels.push(newFile);
                });

                if (fileModels.length) {

                    db.collection('files').insertMany(fileModels, function (err, result) {
                        if (err) {
                            return res.status(503).json({
                                error: {
                                    message: "Unable saved your files"
                                }
                            });
                        }

                        return res.json({
                            files: fileModels
                        });
                    });
                } else {
                    return res.status(503).json({
                        error: {
                            message: "Files upload is required"
                        }

                    });
                }
            });

            app.get('/api/download/:id', function (req, res, next) {
                var fileId = req.params.id;

                db.collection('files').find({ _id: (0, _mongodb.ObjectID)(fileId) }).toArray(function (err, result) {

                    var fileName = _lodash2.default.get(result, '[0].name');
                    if (err || !fileName) {
                        return res.status(404).json({
                            error: {
                                message: "File not found"
                            }
                        });
                    }
                    var filePath = _path2.default.join(uploadDir, fileName);

                    return res.download(filePath, fileName, function (err) {
                        if (err) {
                            return res.status(404).json({
                                error: {
                                    message: "File not found"
                                }
                            });
                        } else {
                            console.log("File is downloaded");
                        }
                    });
                });
            });

            app.get('/api/download', function (req, res, next) {
                var fileId = req.params.id;

                db.collection('files').find().toArray(function (err, result) {

                    var fileName = _lodash2.default.get(result, '[0].name');
                    if (err || !fileName) {
                        return res.status(404).json({
                            error: {
                                message: "File not found"
                            }
                        });
                    }
                    var filePath = _path2.default.join(uploadDir, fileName);

                    return res.download(filePath, fileName, function (err) {
                        if (err) {
                            return res.status(404).json({
                                error: {
                                    message: "File not found"
                                }
                            });
                        } else {
                            console.log("File is downloaded");
                        }
                    });
                });
            });

            app.get('/api/posts/:id', function (req, res, next) {
                var postId = _lodash2.default.get(req, 'params.id');
                var postObjectId = null;
                try {
                    postObjectId = new _mongodb.ObjectID(postId);
                } catch (err) {
                    return res.status(404).json({ error: { message: 'File not founddddddd.' } });
                }

                db.collection('posts').find({ _id: postObjectId }).limit(1).toArray(function (err, results) {
                    var result = _lodash2.default.get(results, '[0]');

                    if (err || !result) {
                        return res.status(404).json({ error: { message: 'File not found11111' } });
                    }

                    var fileIds = _lodash2.default.get(result, 'files', []);

                    db.collection('files').find({ _id: { $in: fileIds } }).toArray(function (err, files) {
                        if (err || !files || !files.length) {
                            return res.status(404).json({ error: { message: 'File not found222' } });
                        }

                        result.files = files;

                        return res.json(result);
                    });
                });
            });
        }
    }]);

    return AppRouter;
}();

exports.default = AppRouter;
//# sourceMappingURL=router.js.map