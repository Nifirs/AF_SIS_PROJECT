const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const crsRoutes = express.Router();


crsRoutes.use(cors());
let Marks = require("../models/Marks");
let Note = require("../models/Notes");


crsRoutes.route('/all').get((req,res)=>{
    Note.find((err,courses)=>{
        if (err){
            console.log(err);
        } else {
            res.json(courses)
        }
    });
});

crsRoutes.route('/all/:id').get((req,res)=>{
    let id = req.params.id;
    Note.findById(id,(err,courses)=>{
        res.json(courses);
    })
});
crsRoutes.route('/add').post((req,res)=>{
    let course = new Note(req.body);
    course.save()
        .then(course=>{
            res.status(200).json({'note':'Note added successfully'});
        })
        .catch(err=>{
            res.status(400).send('adding failed');
        })
});

crsRoutes.route('/update/:id').post(function (req,res) {
    Note.findById(req.params.id,function (err, course) {
        if (!course)
            res.status(404).send('data is not found');
        else {
            course.NoteDate = req.body.NoteDate;
            course.NoteSub = req.body.NoteSub;
            course.Note = req.body.Note;
            course.completed = req.body.completed;

            course.save().then(course => {
                res.json('Note Updated');
            })
                .catch(err => {
                    res.status(400).send("Update  impossible")
                })
        }
    })
});

crsRoutes.delete('/delete/:id',(req,res)=>{
    Note.findByIdAndRemove({_id:req.params.id}).then(course=>{
        res.send(course);

    })
});



//Marks Route starts here

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
            res.status(200).json({'marks':'Marks added successfully'});
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
                res.json('Marks Updated');
            })
                .catch(err => {
                    res.status(400).send("Update not possible")
                })
        }
    })
});


crsRoutes.delete('/mDelete/:id',(req,res)=>{
    Marks.findByIdAndRemove({_id:req.params.id}).then(course=>{
        res.send(course);

    })
});

module.exports = crsRoutes;
