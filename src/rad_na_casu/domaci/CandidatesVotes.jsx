import { useState } from "react";

const CandidatesVotes = () => {
  const [candidates, setCandidates] = useState([
    { name: "ajsa", votes: 0 },
    { name: "ajla", votes: 0 },
    { name: "tedi", votes: 0 },
  ]);

  const vote = (index) => {
    // index = argument
    setCandidates((prevCandidates) =>
      prevCandidates.map((candidate, i) =>
        i === index ? { ...candidate, votes: candidate.votes + 1 } : candidate
      )
    );
  };

  return (
    <div>
      {candidates.map((candidate, index) => (
        // index se samo koristi radi provere da li je trenutni kandidat u vote onaj na koji je kliknuto
        <div key={candidate.name}>
          <p>
            {candidate.name} has {candidate.votes} votes
          </p>
          <button onClick={() => vote(index)}>Vote</button>
          {/* saljemo vote(index) u arrow funkciji zato sto vote funkcija ima argument*/}
        </div>
      ))}
    </div>
  );
};
export default CandidatesVotes;
