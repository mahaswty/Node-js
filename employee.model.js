const mongoose = require('mongoose');
var employeeSchema= new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    }

});
mongoose.model('Employee', employeeSchema);