const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const crsRoutes = express.Router();
const PORT = 4000;

let Course = require('./model');
let Marks = require('./modelM');

//connect mongodb
const mongoose = require('mongoose');


app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/notifys',{useNewUrlParser: true});
const connection =mongoose.connection;
connection.once('open', check=> {
    console.log('mongoDB connect Successfully');
});

crsRoutes.route('/all').get((req,res)=>{
    Course.find((err,courses)=>{
        if (err){
            console.log(err);
        } else {
            res.json(courses)
        }
    });
});

crsRoutes.route('/all/:id').get((req,res)=>{
    let id = req.params.id;
    Course.findById(id,(err,courses)=>{
        res.json(courses);
    })
});
crsRoutes.route('/add').post((req,res)=>{
    let course = new Course(req.body);
    course.save()
        .then(course=>{
            res.status(200).json({'course':'Note added successfully'});
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
            course.Date = req.body.Date;
            course.Subject = req.body.Subject;
            course.Note = req.body.Note;
            course.completed = req.body.completed;

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



//Marks

crsRoutes.route('/').get((req,res)=>{
    Marks.find((err,marks)=>{
        if (err){
            console.log(err);
        } else {
            res.json(marks)
        }
    });
});

crsRoutes.route('/:id').get((req,res)=>{
    let id = req.params.id;
    Marks.findById(id,(err,courses)=>{
        res.json(courses);
    })
});
crsRoutes.route('/mAdd').post((req,res)=>{
    let marks = new Marks(req.body);
    marks.save()
        .then(marks=>{
            res.status(200).json({'course':'Note added successfully'});
        })
        .catch(err=>{
            res.status(400).send('adding failed');
        })
});

crsRoutes.route('/mUpdate/:id').post(function (req,res) {
    Marks.findById(req.params.id,function (err, marks) {
        if (!marks)
            res.status(404).send('data is not found');
        else {
            marks.Subject = req.body.Subject;
            marks.regNo = req.body.regNo;
            marks.Marks = req.body.Marks;
            marks.completed = req.body.completed;
            marks.save().then(course => {
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

crsRoutes.delete('/mDelete/:id',(req,res)=>{
    Marks.findByIdAndRemove({_id:req.params.id}).then(course=>{
        res.send(course);

    })
});






app.use('/notifys',crsRoutes);

app.listen(PORT, err => {
    if (err){
        console.error(err);
        return;
    }
    console.log("Server is running on Port : "+PORT);

});
