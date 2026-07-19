import React, { useEffect, useState } from "react";
import { CalendarGrid } from "../componants/CalenderGrid";
import { ScheduleForm } from "../componants/ScheduleForm";
import { CandidateList } from "../componants/CandidateList";
import { Sidebar } from "../componants/Sidebar";
import { Navbar } from "../componants/Navbar";
import { StatCard } from "../componants/StatCard";
import { getSchedule } from "../services/scheduleService.js";


export const Dashboard = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [schedules, setSchedules] = useState([]);
  const [selectedInterviewer, setSelectedInterviewer] = useState("");

  const fetchSchedules = async () => {
    try {
      const response = await getSchedule();

      console.log("Response:", response);
      console.log("Schedules:", response.data);
      console.log("Is Array:", Array.isArray(response.data));

      setSchedules(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSchedules();
  }, []);

  useEffect(() => {
    console.log("Schedules state:", schedules);
    console.log("Is Array:", Array.isArray(schedules));
  }, [schedules]);

  return (
    <div className="h-full flex flex-col min-h-screen bg-slate-50">
      <div className="flex flex-col flex-1 w-full min-w-0">
        <Navbar />

        <main className="flex-1 p-4 sm:p-6 max-w-[1600px] w-full mx-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <StatCard title="Today's Interviews" value="5" />
            <StatCard title="Candidates" value="9" />
            <StatCard title="Interviewers" value="3" />
            <StatCard title="Available Slots" value="12" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            <div className="lg:col-span-3 w-full flex flex-col h-full">
              <CandidateList
                selectedCandidate={selectedCandidate}
                setSelectedCandidate={setSelectedCandidate}
              />
            </div>

            <div className="lg:col-span-6 w-full flex flex-col h-full">
              <CalendarGrid
                schedules={schedules}
                selectedInterviewer={selectedInterviewer}
              />
            </div>

            <div className="lg:col-span-3 w-full flex flex-col h-full">
              <ScheduleForm
                selectedCandidate={selectedCandidate}
                fetchSchedules={fetchSchedules}
              />
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};
