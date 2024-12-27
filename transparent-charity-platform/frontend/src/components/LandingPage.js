import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Team TechGeeks</h1>
        <h2>Project : Transparent Charity Platform</h2>
      </header>
      <div className="quotes">
        <p>"The best way to find yourself is to lose yourself in the service of others." – Mahatma Gandhi</p>
        <p>"Nobody can do everything, but everyone can do something." – Author Unknown</p>
        <p>"Charity begins at home, but should not end there." – Thomas Fuller</p>
      </div>
      <div className="buttons">
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
