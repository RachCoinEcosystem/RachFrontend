import React, { useState } from 'react';

const dummyProposals = [
  { id: 1, title: 'Proposal One', description: 'This is the first proposal.', votes: 10 },
  { id: 2, title: 'Proposal Two', description: 'This is the second proposal.', votes: 5 },
  { id: 3, title: 'Proposal Three', description: 'This is the third proposal.', votes: 7 },
];

const Vote = () => {
  const [proposals, setProposals] = useState(dummyProposals);
  const [notification, setNotification] = useState('');

  const handleVote = (id) => {
    const updatedProposals = proposals.map((proposal) =>
      proposal.id === id ? { ...proposal, votes: proposal.votes + 1 } : proposal
    );
    setProposals(updatedProposals);
    setNotification('Vote successful.');
    setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Vote</h2>
      {notification && <div className="mb-4 text-green-500">{notification}</div>}
      <div className="space-y-4">
        {proposals.map((proposal) => (
          <div key={proposal.id} className="p-4 border rounded shadow">
            <h3 className="text-lg font-semibold mb-2">{proposal.title}</h3>
            <p className="mb-2">{proposal.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-md">Votes: {proposal.votes}</span>
              <button
                onClick={() => handleVote(proposal.id)}
                className="p-2 bg-blue-500 text-white rounded"
              >
                Vote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vote;
