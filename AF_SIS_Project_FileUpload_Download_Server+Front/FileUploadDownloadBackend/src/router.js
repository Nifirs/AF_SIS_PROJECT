import {version} from '../package.json';
import _ from 'lodash';
import File from './models/file';
import {ObjectID} from 'mongodb';
import path from 'path'



class AppRouter {

    constructor(app) {
        this.app = app;
        this.setupRouters();
    }


    setupRouters() {

        const app = this.app;
        const db = app.get('db');
        const uploadDir = app.get('storageDir');
        const upload = app.get('upload');

        app.get('/', (req, res, next) => {

            return res.status(200).json({
                version: version
            });

        });



        app.post('/api/upload', upload.array('files'), (req, res, next) => {
            const files = _.get(req, 'files', []);

            let fileModels = [];

            _.each(files, (fileObject)=>{
               const newFile = new File(app).initWithObject(fileObject).toJSON();
               fileModels.push(newFile);
            });

            if (fileModels.length){

                db.collection('files').insertMany(fileModels, (err, result) => {
                    if (err) {
                        return res.status(503).json({
                            error: {
                                message: "Unable saved your files",
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
                        message: "Files upload is required",
                    }

                });
            }
        });

        app.get('/api/download/:id', (req,res,next)=>{
            const fileId = req.params.id;

            db.collection('files').find({_id:ObjectID(fileId)}).toArray((err,result)=>{

                const fileName = _.get(result, '[0].name');
                if (err || !fileName){
                    return res.status(404).json({
                        error: {
                            message: "File not found"
                        }
                    })
                }
                const filePath = path.join(uploadDir,fileName);

                return res.download(filePath,fileName,(err)=> {
                    if (err){
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

        app.get('/api/download', (req,res,next)=>{
            const fileId = req.params.id;


            db.collection('files').find().toArray((err,result)=>{


                const fileName = _.get(result, '[0].name');
                if (err || !fileName){
                    return res.status(404).json({
                        error: {
                            message: "File not found"
                        }
                    })
                }
                const filePath = path.join(uploadDir,fileName);

                return res.download(filePath,fileName,(err)=> {
                    if (err){
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



        app.get('/api/posts/:id', (req,res,next)=>{
            const postId = _.get(req,'params.id');
            let postObjectId = null;
            try {
                postObjectId = new ObjectID(postId);
            }catch (err) {
                return res.status(404).json({error: {message: 'File not founddddddd.'}})
            }

            db.collection('posts').find({_id:postObjectId}).limit(1).toArray((err,results)=>{
                let result = _.get(results,'[0]');

                if (err || !result) {
                    return res.status(404).json({error: {message: 'File not found11111'}});

                }

                    const fileIds = _.get(result,'files', []);

                    db.collection('files').find({_id: {$in: fileIds}}).toArray((err,files)=>{
                        if (err || !files || !files.length){
                            return res.status(404).json({error: {message: 'File not found222'}});
                        }

                        result.files = files;

                        return res.json(result);

                    })

            })
        })

     }



}

export default AppRouter;