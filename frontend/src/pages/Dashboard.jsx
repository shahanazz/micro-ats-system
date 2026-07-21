import React, { useEffect, useState } from "react";
import { CalendarGrid } from "../componants/schedule/CalenderGrid.jsx";
import { ScheduleForm } from "../componants/schedule/ScheduleForm.jsx";
import { CandidateList } from "../componants/candidate/CandidateList";
import { Sidebar } from "../componants/commen/Sidebar.jsx";
import { Navbar } from "../componants/commen/Navbar.jsx";
import { StatCard } from "../componants/commen/StatCard.jsx";
import { getSchedule } from "../services/scheduleService.js";
import { getCandidates } from "../services/candidateService.js";
import { getInterviewers } from "../services/interviewerService.js";


export const Dashboard = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [schedules, setSchedules] = useState([]);
  const [selectedInterviewer, setSelectedInterviewer] = useState("");
  const [candidateCount, setCandidateCount] = useState(0);
  const [interviewerCount, setInterviewerCount] = useState(0);
  const [todayInterviewCount, setTodayInterviewCount] = useState(0);
  const [upcomingInterviewCount, setUpcomingInterviewCount] = useState(0);

  const fetchSchedules = async () => {
    try {
      const response = await getSchedule();

      // console.log("Response:", response);
      // console.log("Schedules:", response.data);
      // console.log("Is Array:", Array.isArray(response.data));
          const today = new Date().toDateString();

    const todayCount = response.data.filter((schedule) => {
      return (
        new Date(schedule.startTime).toDateString() === today
      );
    }).length;

    console.log(todayCount);
    

    setTodayInterviewCount(todayCount);

     const now = new Date();

    const upcomingCount = schedules.filter((schedule) => {
      return new Date(schedule.startTime) > now;
    }).length;

    setUpcomingInterviewCount(upcomingCount);

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

  const fetchCandidates = async () => {
  try {
    const data = await getCandidates();

    setCandidateCount(data.length);

  } catch (error) {
    console.log(error);
  }
};
const fetchInterviewers = async () => {
  try {
    const data = await getInterviewers();

    setInterviewerCount(data.length);

  } catch (error) {
    console.log(error);
  }
};



useEffect(() => {
  fetchCandidates();
  fetchInterviewers();
  fetchSchedules();
}, []);

useEffect(() => {
  const now = new Date();

  setUpcomingInterviewCount(
    schedules.filter(
      (schedule) => new Date(schedule.startTime) > now
    ).length
  );
}, [schedules]);

  return (
    <div className="h-full flex flex-col min-h-screen bg-slate-50">
      <div className="flex flex-col flex-1 w-full min-w-0">
        <Navbar />

        <main className="flex-1 p-4 sm:p-6 max-w-[1600px] w-full mx-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <StatCard title="Today's Interviews" value={todayInterviewCount} />
            <StatCard title="Candidates" value={candidateCount} />
            <StatCard title="Interviewers" value={interviewerCount} />
            <StatCard title="Upcoming Interviews" value={upcomingInterviewCount} />
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
