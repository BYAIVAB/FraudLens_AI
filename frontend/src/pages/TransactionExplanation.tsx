import React from 'react';
import { useParams } from 'react-router-dom';

const TransactionExplanation = () => {
  const { transactionId } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Transaction Explanation</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Transaction ID: {transactionId}</h2>
        <p className="text-gray-600">
          Detailed explanation for this transaction will be displayed here.
        </p>
      </div>
    </div>
  );
};

export default TransactionExplanation; 