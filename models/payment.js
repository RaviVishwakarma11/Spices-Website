const mongoose = require('mongoose');
const validator = require('validator');

const paymentSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email ID")
            }
        },
        unique:true
    },
    phone : {
        type:Number,
        required:true,
        min:10,
        unique:true
    },
    address : {
        type:String,
        required:true
    }
})

const Payment = new mongoose.model("Payment", paymentSchema)

module.exports = Payment;