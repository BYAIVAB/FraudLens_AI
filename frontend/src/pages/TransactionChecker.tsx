import React from 'react';
import TransactionForm from '../components/TransactionForm.tsx';
import { BackgroundPaths } from '../components/ui/background-paths.tsx';

const TransactionChecker = () => {
    return (
        <BackgroundPaths>
            <div className="relative z-10 pt-24 max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8 text-white">Transaction Checker</h1>
                <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                    <TransactionForm />
                </div>
            </div>
        </BackgroundPaths>
    );
};

export default TransactionChecker; 