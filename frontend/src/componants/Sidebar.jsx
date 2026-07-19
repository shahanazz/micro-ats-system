import { LayoutDashboard, CalendarDays, Users } from "lucide-react";

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col">
      <div className="h-20 flex items-center justify-center border-b border-slate-800">
        <div>
          <h1 className="text-2xl font-bold">Micro ATS</h1>

          <p className="text-xs text-slate-400">Smart Scheduler</p>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-3">
          <li>
            <button className="flex items-center gap-3 w-full rounded-lg bg-blue-600 px-4 py-3">
              <LayoutDashboard size={20} />
              Dashboard
            </button>
          </li>

          <li>
            <button className="flex items-center gap-3 w-full rounded-lg px-4 py-3 hover:bg-slate-800 transition">
              <CalendarDays size={20} />
              Interview Scheduler
            </button>
          </li>

          <li>
            <button className="flex items-center gap-3 w-full rounded-lg px-4 py-3 hover:bg-slate-800 transition">
              <Users size={20} />
              Candidates
            </button>
          </li>
        </ul>
      </nav>

      <div className="border-t border-slate-800 p-4">
        <p className="font-semibold">Recruiter</p>

        <p className="text-sm text-slate-400">HR Team</p>
      </div>
    </aside>
  );
};
