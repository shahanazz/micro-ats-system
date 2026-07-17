import mongoose from 'mongoose';
import Candidate from '../models/candidateModel.js';
import Interviewer from '../models/interviwerModel.js';
import interviewSlot from '../models/interviewSlotModel.js';

export const createSchedule = async ({
    candidateId,
    interviewerId,
    startTime,
    endTime
})  => {

    // basic validation
    if(!candidateId || !interviewerId || !startTime || !endTime){
        throw {
            status : 400,
            message : "All feilds are required"
        }
    }

    if(!mongoose.Types.ObjectId.isValid(candidateId) || !mongoose.Types.ObjectId.isValid(interviewerId)){
        throw {
            status : 400,
            message : "Invalid Candidate or Interviewer ID"
        }
    }


    const start = new Date(startTime);
    const end = new Date(endTime);

    if(start >= end){
        throw {
            status : 400,
            message : "Invalid Time",
        }
    }

    // check if candidate exists
    const candidate = await Candidate.findById(candidateId);

    if(!candidate){
        throw {
            status : 404,
            message : "Candidate Not Found!"
        }
    }

    // check if interviewer exists
  const interviewer = await Interviewer.findById(interviewerId);

   if(!interviewer){
        throw {
            status : 404,
            message : "Interviewer Not Found!"
        }
    }

    // check overlap timing

    const conflict = await interviewSlot.findOne({
        interviewerId,

        startTime : {
            $lt : end
        },

        endTime : {
            $gt : start
        }
    }).populate('candidateId' , 'name');

    if(conflict){
        throw {
            status : 409,
            message : "Interviewer Already Booked.",
            conflictCandidate : conflict.candidateId.name,
        }
    }

    // create Interview

    const interview = await interviewSlot.create({
        candidateId,
        interviewerId,
        startTime : start,
        endTime : end
    })

    return interview;

}