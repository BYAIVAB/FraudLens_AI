import React from 'react';
import { useNavigate } from 'react-router-dom';

const statusChipStyle = (fraud) => ({
  display: 'inline-block',
  padding: '0.25em 0.75em',
  borderRadius: '1em',
  background: fraud ? '#ffcccc' : '#d4f8e8',
  color: fraud ? '#b30000' : '#007a3d',
  fontWeight: 'bold',
  marginBottom: '1em',
});

const barContainer = {
  width: '100%',
  background: '#eee',
  borderRadius: '1em',
  height: '1.5em',
  margin: '1em 0',
  overflow: 'hidden',
};
const barFill = (prob) => ({
  width: `${Math.round(prob * 100)}%`,
  background: prob > 0.5 ? '#e63946' : '#43aa8b',
  height: '100%',
  transition: 'width 0.5s',
});

const ResultPanel = ({ verdict, probability, transactionId }) => {
  const navigate = useNavigate();
  if (verdict == null || probability == null) return null;
  const fraud = verdict === 'fraudulent' || verdict === 'Fraudulent';
  return (
    <div style={{ marginTop: 32 }}>
      <div style={{ textAlign: 'center', marginBottom: 8 }}>
        <span style={statusChipStyle(fraud)}>
          {fraud ? '🚨 Fraudulent' : '✅ Legitimate'}
        </span>
      </div>
      <div style={barContainer}>
        <div style={barFill(probability)} />
      </div>
      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <span style={{ fontWeight: 'bold' }}>{Math.round(probability * 100)}% fraud</span>
      </div>
      {transactionId && (
        <div style={{ textAlign: 'center' }}>
          <button
            style={{ padding: '0.5em 1.5em', borderRadius: 6, border: 'none', background: '#1976d2', color: '#fff', cursor: 'pointer' }}
            onClick={() => navigate(`/explanation/${transactionId}`)}
          >
            View Explanation »
          </button>
        </div>
      )}
    </div>
  );
};

export default ResultPanel; 