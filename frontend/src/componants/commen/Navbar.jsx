import { Bell, ChevronDown } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md shadow-[0_2px_20px_rgb(0,0,0,0.02)]">
      <div className="flex h-16 sm:h-20 items-center justify-between px-4 sm:px-8 max-w-[1600px] mx-auto w-full">
    
        <div className="flex flex-col justify-center min-w-0">
          <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-slate-800 truncate">
            Recruiter Dashboard
          </h2>
          <p className="hidden md:block mt-0.5 text-xs sm:text-sm text-slate-400 font-medium">
            Schedule and manage interviews efficiently
          </p>
        </div>

    
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
      
          <button
            className="
              relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center
              rounded-xl border border-slate-200
              bg-white text-purple-600
              shadow-sm transition-all duration-200
              hover:bg-purple-50 hover:border-purple-200 hover:shadow-md active:scale-[0.97]
            "
          >
            <Bell size={18} className="sm:w-[21px] sm:h-[21px]" />

            <span
              className="
                absolute right-2.5 top-2.5
                h-2 w-2 rounded-full
                bg-purple-600
                ring-2 ring-white
              "
            />
          </button>

         
          <div
            className="
              flex h-10 sm:h-12 items-center gap-2 sm:gap-3
              rounded-xl border border-slate-200
              bg-white px-2 sm:px-3
              shadow-sm cursor-pointer
              hover:border-purple-200 hover:shadow-md transition duration-200 active:scale-[0.98]
            "
          >
            <div
              className="
                flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center
                rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600
                text-xs sm:text-sm font-bold text-white shadow-sm
              "
            >
              R
            </div>

            <div className="hidden leading-tight sm:block text-left">
              <p className="text-xs sm:text-sm font-semibold text-slate-700">Recruiter</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Admin</p>
            </div>

            <ChevronDown size={14} className="text-slate-400 transition-transform group-hover:translate-y-0.5" />
          </div>
        </div>
      </div>
    </header>
  );
};