import Interviewer from '../models/interviwerModel.js';
import Schedule from '../models/interviewSlotModel.js';



export const getInterviwers = async (req, res) =>{
    try {
        
        const interviewerData = await Interviewer.find();

        if(!interviewerData){
            return res.status(404).json({
                success : false,
                message : "There is no registered Interviwer!!"
            });
        }

        return res.status(200).json({
            success : true,
            message : "interviewers fetched successfully!!",
            data : interviewerData,
        })

    } catch (error) {
        console.error('Error fetching interviwers!!', error.message);
        return res.status(500).json({
            success : false,
            message : "Internal Server error"
        })
    }
}


export const getInterviwersSchedule = async (req, res) => {
    try {
        
        const { id } = req.params;

         const schedule = await Schedule.find({interviewerId: id, })
                         .populate("candidateId", "name email status")
                         .sort({ startTime: 1 });

           
            return res.status(200).json({
                success : true,
                message : "Schedule fetched successfully",
                data : schedule
            })

    } catch (error) {
        console.error('Error fetching interview schedule');
        res.status(500).json({
            success : false,
            message : "internal Server Error"
        })
    }
}