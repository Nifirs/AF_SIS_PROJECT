const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const crsRoutes = express.Router();
const PORT = 5000;

let Course = require('./model');

//connect mongodb
const mongoose = require('mongoose');


app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/course,',{useNewUrlParser: true});
const connection =mongoose.connection;
connection.once('open', check=> {
    console.log('mongoDB connect Successfully');
});

crsRoutes.route('/').get((req,res)=>{
    Course.find((err,courses)=>{
        if (err){
            console.log(err);
        } else {
            res.json(courses)
        }
    });
});

crsRoutes.route('/:id').get((req,res)=>{
    let id = req.params.id;
    Course.findById(id,(err,courses)=>{
        res.json(courses);
    })
});
crsRoutes.route('/add').post((req,res)=>{
    let course = new Course(req.body);
    course.save()
        .then(course=>{
            res.status(200).json({'course':'course added successfully'});
        })
        .catch(err=>{
            res.status(400).send('adding failed');
        })
});
crsRoutes.route('/update/:id').post(function (req,res) {
    Course.findById(req.params.id,function (err, course) {
        if (!course)
            res.status(404).send('data is not found');
        else {
            course.coursename = req.body.coursename;
            course.courseId = req.body.courseId;
            course.courseDur = req.body.courseDur;
            course.courseFee = req.body.courseFee;


            course.save().then(course => {
                res.json('Course Updated');
            })
                .catch(err => {
                    res.status(400).send("Update not possible")
                })
        }
    })
});


// crsRoutes.put('update/:id',(req,res)=>{
//    Course.findByIdAndUpdate({_id: req.params.id},req.body).then(function () {
//        Course.findOne({_id: req.params.id}).then( (course)=> {
//            res.send(course);
//        });
//    } );
// });

crsRoutes.delete('/delete/:id',(req,res)=>{
    Course.findByIdAndRemove({_id:req.params.id}).then(course=>{
        res.send(course);

    })
});

app.use('/course',crsRoutes);

app.listen(PORT, err => {
    if (err){
        console.error(err);
        return;
    }
    console.log("Server is running on Port : "+PORT);

});
