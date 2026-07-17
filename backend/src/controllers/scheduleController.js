import { createSchedule } from '../services/scheduleServices.js';

export const scheduleInterview = async (req, res) =>{
    try {
        
        const interview = await createSchedule(req.body);
        
        return res.status(201).json({
            success : true,
            message : "Interview scheduled successfully",
            data : interview
        })

    } catch (error) {
        console.error('Error creating interview shedule');
        return res.status(500).json({
            success : false,
            message : error.message || "Internal server error",
            conflictingCandidate: error.conflictingCandidate || null,
        })
    }
}
