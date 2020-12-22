const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
    },
    email: {
        type: String,       
    },
    salary: {
        type: Number,     
    },
    designation: {
        type: String,     
    }
});




mongoose.model('Employee', employeeSchema);