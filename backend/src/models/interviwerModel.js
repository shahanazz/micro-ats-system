import mongoose from "mongoose";

const interviewerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
    },
    department : {
        type : String,
        required : true,
    }
},
{
    timestamps : true,
}) 

const Interviewer =  mongoose.model('Interviewer' , interviewerSchema);

export default Interviewer;