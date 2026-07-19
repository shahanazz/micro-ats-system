import { TimeSlot } from "./TimeSlot";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { getInterviewers } from "../services/interviewerService";
import { useEffect, useState } from "react";

export const CalendarGrid = ({ schedules }) => {
  const [interviewers, setInterviewers] = useState([]);
  const [selectedInterviewer, setSelectedInterviewer] = useState("");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0],
  );

  useEffect(() => {
    fetchInterviewers();
  }, []);

  const fetchInterviewers = async () => {
    try {
      const data = await getInterviewers();
      console.log(data);
      setInterviewers(data);

      if (data.length > 0) {
        setSelectedInterviewer(data[0]._id);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const workingHours = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const filteredSchedules = schedules.filter((schedule) => {
    return (
      schedule.interviewerId?._id === selectedInterviewer &&
      schedule.startTime.startsWith(selectedDate)
    );
  });

  return (
   
    <section className="h-full flex flex-col col-span-6 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100/80 pb-6">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-50 text-purple-600">
              <CalendarDays size={20} />
            </div>
            <h2 className="text-xl font-bold tracking-tight text-slate-800">Interviewer Calendar</h2>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            View interviewer availability and booked interviews
          </p>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button className="text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-purple-50 hover:border-purple-200 hover:text-purple-700 transition-all active:scale-[0.98]">
            Today
          </button>

          <button className="rounded-xl border border-slate-200 p-2 text-slate-600 hover:bg-purple-50 hover:border-purple-200 hover:text-purple-700 transition-all active:scale-[0.98]">
            <ChevronLeft size={16} />
          </button>

          <button className="rounded-xl border border-slate-200 p-2 text-slate-600 hover:bg-purple-50 hover:border-purple-200 hover:text-purple-700 transition-all active:scale-[0.98]">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold tracking-wide uppercase text-slate-500 mb-2">
            Select Interviewer
          </label>
          <select
            value={selectedInterviewer}
            onChange={(e) => setSelectedInterviewer(e.target.value)}
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
          <label className="block text-xs font-semibold tracking-wide uppercase text-slate-500 mb-2">Select Date</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full text-sm rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 outline-none transition-all focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 text-slate-700"
          />
        </div>
      </div>

    
      <div className="mt-6 flex-1 flex flex-col rounded-2xl border border-slate-100 bg-slate-50/30 p-4 shadow-inner">
        <div className="space-y-2.5 max-h-[440px] overflow-y-auto pr-1 flex-1 scrollbar-thin scrollbar-thumb-slate-200">
          {workingHours.map((hour) => {
            const bookedSchedule = filteredSchedules.find((schedule) => {
              const start = new Date(schedule.startTime);
              const scheduleHour =
                start.getHours().toString().padStart(2, "0") + ":00";
              return scheduleHour === hour;
            });

            return (
              <TimeSlot key={hour} time={hour} schedule={bookedSchedule} />
            );
          })}
        </div>
      </div>
    </section>
  );
};