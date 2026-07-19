import { Clock } from "lucide-react";

export const TimeSlot = ({ time, schedule }) => {
  const booked = !!schedule;

  // check the data converted or not
  //   if (schedule) {
  //   console.log("UTC from DB:", schedule.startTime);
  //   console.log("Local Date:", new Date(schedule.startTime));
  //   console.log(
  //     "Local Time:",
  //     new Date(schedule.startTime).toLocaleTimeString()
  //   );
  //   console.log(
  //     "Timezone:",
  //     Intl.DateTimeFormat().resolvedOptions().timeZone
  //   );
  // }

  return (
    <div
      className={`flex items-center justify-between rounded-xl border p-4
      ${booked ? "border-red-200 bg-red-50" : "border-green-200 bg-green-50"}`}
    >
      <div className="flex items-center gap-3">
        <Clock size={18} />

        <span className="font-semibold">{time}</span>
      </div>

      {booked ? (
        <div className="flex items-center gap-6">
          <div>
            <p className="font-semibold">{schedule.candidateId?.name}</p>

            <p className="text-sm text-gray-500">
              {schedule.interviewerId?.name}
            </p>
          </div>

          <span className="rounded-full bg-red-600 px-3 py-1 text-white">
            Booked
          </span>
        </div>
      ) : (
        <div className="flex items-center gap-5">
          <span className="font-semibold text-green-700">Available</span>
        </div>
      )}
    </div>
  );
};
