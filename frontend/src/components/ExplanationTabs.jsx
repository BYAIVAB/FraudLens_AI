import React, { useState } from 'react';

const tabs = [
  { label: 'SHAP', content: 'SHAP explanation goes here.' },
  { label: 'Counterfactuals', content: 'Counterfactuals explanation goes here.' },
  { label: 'Rules', content: 'Rules explanation goes here.' },
  { label: 'Similar Cases', content: 'Similar cases explanation goes here.' },
];

const ExplanationTabs = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="explanation-tabs">
      <div className="tab-list">
        {tabs.map((tab, idx) => (
          <button key={tab.label} onClick={() => setActive(idx)} className={active === idx ? 'active' : ''}>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <p>{tabs[active].content}</p>
      </div>
    </div>
  );
};

export default ExplanationTabs; 