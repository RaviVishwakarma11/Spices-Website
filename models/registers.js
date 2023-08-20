const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    phone : {
        type:Number,
        required:true,
        unique:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    password : {
        type:String,
        required:true
    },
    confirmpassword : {
        type:String,
        required:true
    },
    selection : {
        type:String,
        required:true
    }
})

const Register = new mongoose.model("Registers", employeeSchema)

module.exports = Register;