import React from 'react';

const QuickFacts = ({ facts = [] }) => (
  <div className="quick-facts">
    {facts.map((fact, idx) => (
      <div key={idx} className="fact-card">
        <strong>{fact.label}</strong>
        <div>{fact.value}</div>
      </div>
    ))}
  </div>
);

export default QuickFacts; 