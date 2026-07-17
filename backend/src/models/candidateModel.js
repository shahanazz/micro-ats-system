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

    // interviewSlots : [
    //     {
    //         type : mongoose.Types.ObjectId,
    //         ref : "InterviewSlot",
    //     }
    // ]
},
{
    timestamp : true,
});


module.exports = mongoose.model('Candidate', candidateSchema);