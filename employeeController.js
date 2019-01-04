const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employee =  mongoose.model('Employee');
router.get('/', (req,res)=> {
    res.render("employee/add.hbs", {
        viewTitle: "Insert Employee"
    })
});
router.post('/', (req, res) => {
    console.log('1');
    insertRecord(req, res);
 
});
function insertRecord(req, res) {
    console.log(req.body.name);
    var employee = new Employee();
    employee.name = req.body.name;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.save((err, doc) => {
        if (!err)
            res.redirect('employee/list');
        else
            console.log('error' + err);

    });
}

    router.get('/list', (req, res) => {
        res.json('Inserted..');
    });

module.exports = router;
