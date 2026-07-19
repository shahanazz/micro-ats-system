export const StatCard = ({ title, value }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white/80 backdrop-blur-md p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgb(147,51,234,0.1)]">
      <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300 group-hover:h-1" />

      <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-slate-400 truncate">
        {title}
      </p>

      <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-800 truncate">
        {value}
      </h2>

      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-purple-400/20 opacity-40 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-60" />
    </div>
  );
};
