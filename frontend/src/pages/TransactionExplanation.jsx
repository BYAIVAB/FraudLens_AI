import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import FraudGauge from '../components/FraudGauge';
import QuickFacts from '../components/QuickFacts';
import ExplanationTabs from '../components/ExplanationTabs';
import { useParams, useNavigate } from 'react-router-dom';
import { getExplanation } from '../services/api';

const TransactionExplanation = () => {
  const { transactionId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getExplanation(transactionId)
      .then(data => setData(data))
      .catch(() => setError('Failed to load explanation.'))
      .finally(() => setLoading(false));
  }, [transactionId]);

  const handleDownload = () => {
    // Placeholder: implement api.getReport(transactionId) and download logic
    alert('Download report for ' + transactionId);
  };

  if (loading) return <div style={{ textAlign: 'center', marginTop: 40 }}>Loading...</div>;
  if (error) return <div style={{ color: 'red', textAlign: 'center', marginTop: 40 }}>{error}</div>;
  if (!data) return null;

  // Example quick facts structure
  const quickFacts = [
    { label: 'Top Risk', value: data.top_risk || 'N/A' },
    { label: 'Safest Factor', value: data.safest_factor || 'N/A' },
    { label: 'Model Confidence', value: data.model_confidence ? `${Math.round(data.model_confidence * 100)}%` : 'N/A' },
    { label: 'Time', value: data.time || 'N/A' },
  ];

  return (
    <>
      <Header />
      <main style={{ maxWidth: 800, margin: '32px auto', padding: 16 }}>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          <FraudGauge probability={data.fraud_probability || 0} />
          <QuickFacts facts={quickFacts} />
        </div>
        <div style={{ marginTop: 32 }}>
          <ExplanationTabs
            shapValues={data.shap_values}
            counterfactuals={data.counterfactuals}
            surrogateRules={data.surrogate_rules}
            similarCases={data.similar_cases}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 40 }}>
          <button onClick={handleDownload} style={{ padding: '0.5em 1.5em', borderRadius: 6, border: 'none', background: '#1976d2', color: '#fff', cursor: 'pointer' }}>
            Download Report
          </button>
          <button onClick={() => navigate('/check')} style={{ padding: '0.5em 1.5em', borderRadius: 6, border: 'none', background: '#eee', color: '#222', cursor: 'pointer' }}>
            Run Another Check
          </button>
        </div>
      </main>
    </>
  );
};

export default TransactionExplanation; 