import React from 'react';
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to BigA</h1>
      <Link to="/playbook">
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
