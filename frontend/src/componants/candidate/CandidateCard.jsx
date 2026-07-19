import { User } from "lucide-react";
import { statusColors } from "../../constants/constants.js";


export const CandidateCard = ({ candidate, selected, onSelect, onStatusChange }) => {
  return (
    <div
      onClick={() => onSelect(candidate)}
      className={`cursor-pointer rounded-2xl border p-4 transition-all duration-300 relative overflow-hidden
      ${
        selected
          ? "border-purple-500 bg-purple-50/40 shadow-[0_4px_20px_rgb(147,51,234,0.06)]"
          : "border-slate-100 bg-white hover:border-purple-200 hover:shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
      }`}
    >
      {selected && (
        <div className="absolute top-0 bottom-0 left-0 w-1 bg-purple-500" />
      )}

      <div className="flex items-start gap-3">
        <div className={`rounded-xl p-2.5 transition-colors duration-300 ${
          selected ? "bg-purple-500 text-white" : "bg-slate-50 text-slate-400"
        }`}>
          <User size={18} />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-slate-800 text-sm tracking-tight truncate">
            {candidate.name}
          </h3>
          <p className="text-xs text-slate-400 truncate mt-0.5">
            {candidate.email}
          </p>

          <div className="relative inline-block mt-3">
            <select
              value={candidate.status}
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => onStatusChange(candidate._id, e.target.value)}
              className={`text-xs font-semibold tracking-wide rounded-full border px-3 py-1 cursor-pointer outline-none transition-all focus:ring-4 focus:ring-purple-500/10 appearance-none bg-none ${
                statusColors[candidate.status]
              }`}
            >
              <option value="Applied">Applied</option>
              <option value="Technical Round">Technical Round</option>
              <option value="HR Round">HR Round</option>
              <option value="Waiting List">Waiting List</option>
              <option value="Offered">Offered</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};