import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

interface TransactionFormData {
  amount: number;
  customer_age: number;
  transaction_date: string;
  transaction_hour: string;
  account_age: number;
  customer_location: string;
}

const TransactionForm = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<TransactionFormData>();
  const [loading, setLoading] = useState(false);
  const [predictionResult, setPredictionResult] = useState(null);

  const onSubmit = async (data) => {
    setLoading(true);
    setPredictionResult(null);
    try {
      const response = await axios.post('http://127.0.0.1:8000/predict', data);
      setPredictionResult(response.data);
      console.log('Prediction:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to get prediction.');
    } finally {
        setLoading(false);
    }
  };

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6" autoComplete="off">
            {/* Transaction Amount */}
            <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-300">Transaction Amount</label>
                <input
                  id="amount"
                  type="number"
                  step="0.01"
                  {...register('amount', { required: 'Amount is required', valueAsNumber: true, min: { value: 0, message: "Amount must be positive" } })}
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.amount && <p className="text-red-500 text-xs mt-1">{errors.amount.message}</p>}
            </div>

            {/* Customer Age */}
            <div>
                <label htmlFor="customer_age" className="block text-sm font-medium text-gray-300">Customer Age</label>
                <input
                  id="customer_age"
                  type="number"
                  {...register('customer_age', { required: 'Customer age is required', valueAsNumber: true, min: { value: 0, message: "Age must be positive" } })}
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.customer_age && <p className="text-red-500 text-xs mt-1">{errors.customer_age.message}</p>}
            </div>

            {/* Transaction Date */}
            <div>
                <label htmlFor="transaction_date" className="block text-sm font-medium text-gray-300">Transaction Date</label>
                <input
                  id="transaction_date"
                  type="date"
                  {...register('transaction_date', { required: 'Transaction date is required' })}
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.transaction_date && <p className="text-red-500 text-xs mt-1">{errors.transaction_date.message}</p>}
            </div>

            {/* Transaction Hour */}
            <div>
                <label htmlFor="transaction_hour" className="block text-sm font-medium text-gray-300">Transaction Hour</label>
                <Controller
                  name="transaction_hour"
                  control={control}
                  rules={{ required: 'Transaction hour is required' }}
                  render={({ field }) => (
                    <select
                      {...field}
                      id="transaction_hour"
                      className="mt-1 block w-full px-3 py-2 bg-gray-700 border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="">Select Hour</option>
                      {Array.from({ length: 24 }, (_, i) => (
                        <option key={i} value={i} className="bg-gray-700 text-white">{i}</option>
                      ))}
                    </select>
                  )}
                />
                {errors.transaction_hour && <p className="text-red-500 text-xs mt-1">{errors.transaction_hour.message}</p>}
            </div>

            {/* Account Age */}
            <div>
                <label htmlFor="account_age" className="block text-sm font-medium text-gray-300">Account Age (in days)</label>
                <input
                  id="account_age"
                  type="number"
                  {...register('account_age', { required: 'Account age is required', valueAsNumber: true, min: { value: 0, message: "Account age must be positive" } })}
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.account_age && <p className="text-red-500 text-xs mt-1">{errors.account_age.message}</p>}
            </div>

            {/* Customer Location */}
            <div>
                <label htmlFor="customer_location" className="block text-sm font-medium text-gray-300">Customer Location</label>
                <input
                  id="customer_location"
                  type="text"
                  {...register('customer_location', { required: 'Location is required' })}
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.customer_location && <p className="text-red-500 text-xs mt-1">{errors.customer_location.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center mt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                  {loading ? 'Checking...' : 'Check Fraud'}
                </button>
            </div>
        </form>
        {predictionResult && (
            <div className="mt-8 p-4 bg-gray-700 rounded-lg">
                <h3 className="text-lg font-bold text-white">Prediction Result:</h3>
                <pre className="text-white">{JSON.stringify(predictionResult, null, 2)}</pre>
            </div>
        )}
    </>
  );
};

export default TransactionForm; 