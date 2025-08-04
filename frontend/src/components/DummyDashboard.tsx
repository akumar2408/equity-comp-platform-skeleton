import React from 'react';

const DummyDashboard: React.FC = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Dummy Dashboard</h1>
      <p>This dashboard is a placeholder for the real feature-rich UI.</p>
      <div style={{ marginTop: '1rem' }}>
        <h2>Key Metrics</h2>
        <ul>
          <li>Total Users: 100</li>
          <li>Active Sessions: 42</li>
          <li>Pending Actions: 7</li>
        </ul>
      </div>
    </div>
  );
};

export default DummyDashboard;
