import mongoose from 'mongoose';

const interviewSlotSchema = new mongoose.Schema({
    candidateId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Candidate",
        required : true,
    },

    interviwerId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Interviewer",
        required : true
    },

    startTime : {
        type : Date,
        required : true,
    },

    endTime : {
        type : Date,
        required : true,
    },

},
{
    timestamps : true,
});


const interviewSlot =  mongoose.model('InterviewSlot' , interviewSlotSchema);

export default interviewSlot;