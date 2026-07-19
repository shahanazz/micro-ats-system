import { useEffect, useState } from "react";
import { getInterviewers } from "../services/interviewerService.js";
import { scheduleInterview } from "../services/scheduleService.js";
import toast from "react-hot-toast";

export const ScheduleForm = ({ selectedCandidate, fetchSchedules }) => {
  const [interviewers, setInterviewers] = useState([]);

  useEffect(() => {
    fetchInterviewers();
  }, []);

  const fetchInterviewers = async () => {
    try {
      const data = await getInterviewers();
      console.log(data);
      setInterviewers(data);
    } catch (error) {
      console.error(error);
    }
  };

  const [formData, setFormData] = useState({
    interviewerId: "",
    date: "",
    startTime: "",
    endTime: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedCandidate) {
      toast.error("Please select a candidate.");
      return;
    }

    if (
      !formData.interviewerId ||
      !formData.date ||
      !formData.startTime ||
      !formData.endTime
    ) {
      toast.error("Please fill all fields.");
      return;
    }

    const start = new Date(`${formData.date}T${formData.startTime}`);
    const end = new Date(`${formData.date}T${formData.endTime}`);

    const payload = {
      candidateId: selectedCandidate._id,
      interviewerId: formData.interviewerId,
      startTime: start,
      endTime: end,
    };

    try {
      const response = await scheduleInterview(payload);
      console.log(response);
      toast.success("Interview scheduled successfully!");
      await fetchSchedules();
      setFormData({
        interviewerId: "",
        date: "",
        startTime: "",
        endTime: "",
      });
    } catch (error) {
      if (error.response?.status === 409) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <section className="col-span-3 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
      <div className="mb-6">
        <h2 className="text-xl font-bold tracking-tight text-slate-800">Schedule Interview</h2>
        <p className="text-xs text-slate-400 mt-1">Configure and assign a new interview session.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-semibold tracking-wide uppercase text-slate-500 mb-2">Candidate</label>
          <div className={`text-sm rounded-xl px-4 py-3 border font-medium transition-all ${
            selectedCandidate 
              ? "bg-purple-50/60 border-purple-100 text-purple-800" 
              : "bg-slate-50 border-slate-100 text-slate-400 italic"
          }`}>
            {selectedCandidate ? selectedCandidate.name : "Select a candidate from the list"}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold tracking-wide uppercase text-slate-500 mb-2">Interviewer</label>
          <select
            name="interviewerId"
            value={formData.interviewerId}
            onChange={handleChange}
            className="w-full text-sm rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 outline-none transition-all focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 text-slate-700 cursor-pointer appearance-none"
          >
            <option value="">Select Interviewer</option>
            {interviewers.map((interviewer) => (
              <option key={interviewer._id} value={interviewer._id}>
                {interviewer.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold tracking-wide uppercase text-slate-500 mb-2">Interview Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full text-sm rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 outline-none transition-all focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 text-slate-700"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold tracking-wide uppercase text-slate-500 mb-2">Start Time</label>
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              className="w-full text-sm rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 outline-none transition-all focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 text-slate-700"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold tracking-wide uppercase text-slate-500 mb-2">End Time</label>
            <input
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              className="w-full text-sm rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 outline-none transition-all focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 text-slate-700"
            />
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 active:scale-[0.99] text-white rounded-xl py-3.5 font-semibold text-sm shadow-md shadow-purple-500/10 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-200"
          >
            Schedule Interview
          </button>
        </div>
      </form>
    </section>
  );
};