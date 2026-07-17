import mongoose from "mongoose";

const candidateSchema = mongoose.Schema({
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
    status : {
        type : String,
        enum : [
            "Applied",
            "Technical Round",
            "HR Round",
            "Waiting List",
            "Offered",
            "Rejected",
        ],
        default : "Applied"
    },
},
{
    timestamp : true,
});


const Candidate = mongoose.model("Candidate", candidateSchema);

export default Candidate;