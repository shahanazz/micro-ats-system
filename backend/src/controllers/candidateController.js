import Candidates from "../models/candidateModel.js";

export const getCandidates = async (req, res) => {
  try {
    const candidateData = await Candidates.find({});

    if (!candidateData) {
      return res.status(404).json({
        success: false,
        message: "There is no candidates available!!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "candidate Data fetched Successfully!!",
      data: candidateData,
    });
  } catch (error) {
    console.error("Error fetching candidate data", error.message);
    return res.status(500).json({
      success: false,
      message: "Internam server Error",
    });
  }
};

export const updateCandidateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    console.log(req.body);
console.log(status);

    const allowedStatus = [
      "Applied",
      "Technical Round",
      "HR Round",
      "Waiting List",
      "Offered",
      "Rejected",
    ];

    if (!allowedStatus.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid candidate status",
      });
    }

    const candidate = await Candidates.findByIdAndUpdate(
        id,
        {
            status,
        },
        {
            returnDocument: "after",
            runValidators: true,
        }
    );

       if (!candidate) {
      return res.status(404).json({
        success: false,
        message: "Candidate not found",
      });
    }

     return res.status(200).json({
      success: true,
      message: "Candidate status updated successfully",
      data: candidate,
    });

  } catch (error) {
    console.error("Error updating candidate status");
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
