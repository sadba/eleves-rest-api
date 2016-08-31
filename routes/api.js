//dependencies

var express = require('express');
var router = express.Router();

//Models
var Student = require('../models/student');

//routes

router.route('/students')



.get(function(req, res) {
        Student.find(function(err, students) {

            if (err){
            	res.send(err);


            }
                //res.send(200);
                console.log(students);
                
            	res.send({message: 'success', data: 'this'});
        });
    })


.post(function(req, res) {
        
        var student = new Student();      // create a new instance of the Bear model
        student.nom = req.body.nom;  // set the bears name (comes from the request)
        student.age = req.body.age;
        student.nationalite = req.body.nationalite;
        student.classe = req.body.classe;
        // save the bear and check for errors
        student.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Student created!' });
        });
        
    });


router.route('/students/:student_id')
.get(function(req, res) {
        Student.findById(req.params.student_id, function(err, student) {
            if (err)
                res.send(err);
            res.json(student);
        });
    })

.put(function(req, res) {

        // use our student model to find the student we want
        Student.findById(req.params.student_id, function(err, student) {

            if (err)
                res.send(err);

            student.nom = req.body.nom;  // update the students info
            student.age = req.body.age;
            student.nationalite = req.body.nationalite;
            student.classe = req.body.classe;

            // save the student
            student.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Student updated!' });
            });

        });
    })


.delete(function(req, res) {
        Student.remove({
            _id: req.params.student_id
        }, function(err, student) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });










//Return router
module.exports = router;