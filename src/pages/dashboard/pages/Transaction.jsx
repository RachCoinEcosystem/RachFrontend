import React from 'react';

// Dummy data for demonstration
const dummyTransactions = [
  { id: 1, type: 'Deposit', amount: 1000, currency: 'USD', timestamp: '2023-01-01 10:00:00' },
  { id: 2, type: 'Withdraw', amount: 500, currency: 'USD', timestamp: '2023-02-01 11:00:00' },
  { id: 3, type: 'Trade', amount: 1500, currency: 'USD', timestamp: '2023-03-01 12:00:00' },
];

const History = () => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">Transaction History</h3>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Transaction ID</th>
            <th className="py-2 px-4 border">Type</th>
            <th className="py-2 px-4 border">Amount</th>
            <th className="py-2 px-4 border">Currency</th>
            <th className="py-2 px-4 border">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {dummyTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="py-2 px-4 border">{transaction.id}</td>
              <td className="py-2 px-4 border">{transaction.type}</td>
              <td className="py-2 px-4 border">{transaction.amount}</td>
              <td className="py-2 px-4 border">{transaction.currency}</td>
              <td className="py-2 px-4 border">{transaction.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;

