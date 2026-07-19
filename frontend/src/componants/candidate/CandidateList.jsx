import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { CandidateCard }  from "../candidate/CandidateCard.jsx";
import { getCandidates, updateCandidateStatus
 } from "../../services/candidateService.js";


export const CandidateList = ({ selectedCandidate,
    setSelectedCandidate }) => {
  const [candidates, setCandidates] = useState([]);
  const [search, setSearch] = useState("");

  const filteredCandidates = candidates.filter((candidate) =>
    candidate.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    fetchCandidates();
  } , []);

  const fetchCandidates = async () => {
    try {
      const data = await getCandidates();
      console.log(data);

      setCandidates(data);
    } catch (error) {
      console.error(error); 
    }
  }

const handleStatusChange = async (candidateId, newStatus) => {
  try {
    await updateCandidateStatus(candidateId, newStatus);

    setCandidates((prev) =>
      prev.map((candidate) =>
        candidate._id === candidateId
          ? { ...candidate, status: newStatus }
          : candidate
      )
    );
  } catch (error) {
    console.error(error);
  }
};

  return (
    <section className="col-span-3 rounded-xl bg-white border p-5 flex flex-col h-[650px]">

      <h2 className="text-lg font-semibold mb-4">
        Candidates
      </h2>

      <div className="relative mb-5">
        <Search
          className="absolute left-3 top-3 text-gray-400"
          size={18}
        />

        <input
          type="text"
          placeholder="Search candidate..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border py-2 pl-10 pr-4 outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex-1 overflow-y-auto space-y-3">

        {filteredCandidates.map((candidate) => (
          <CandidateCard
            key={candidate._id}
            candidate={candidate}
            selected={selectedCandidate?._id === candidate._id}
            onStatusChange={handleStatusChange}
            onSelect={setSelectedCandidate}
          />
        ))}

      </div>
    </section>
  );
};



