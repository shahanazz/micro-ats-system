import { createSchedule } from '../services/scheduleServices.js';
import  Schedule from '../models/interviewSlotModel.js';

export const scheduleInterview = async (req, res) => {
  try {

    const interview = await createSchedule(req.body);

    return res.status(201).json({
      success: true,
      message: "Interview scheduled successfully",
      data: interview
    });

  } catch (error) {

   console.log("ERROR OBJECT:", error);
    console.log("STATUS:", error.status);

    return res.status(error.status || 500).json({
      success: false,
      message: error.message,
      conflictingCandidate: error.conflictCandidate || null,
    });
}
}

export const getSchedules = async (req, res) => {
  try {

    const schedules = await Schedule.find({})
      .populate("candidateId", "name email")
      .populate("interviewerId", "name department");    

    return res.status(200).json({
      success: true,
      message: "Schedules fetched successfully.",
      data: schedules,
    });

  } catch (error) {

    console.error("Error fetching schedules:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};