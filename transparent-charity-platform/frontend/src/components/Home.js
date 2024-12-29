import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const campaigns = [
    { id: 1, title: 'Education for All', description: 'Support education for underprivileged children.', details: 'This campaign aims to provide quality education to children in underserved communities by building schools and providing resources.', amountRaised: 50000, goal: 100000 },
    { id: 2, title: 'Healthcare Support', description: 'Provide medical aid to rural areas.', details: 'Our healthcare campaign brings medical professionals and resources to remote villages, offering checkups and necessary treatments.', amountRaised: 75000, goal: 150000 },
    { id: 3, title: 'Food Distribution', description: 'Help us feed the hungry.', details: 'This initiative focuses on distributing meals to families in need, ensuring no one goes to bed hungry.', amountRaised: 30000, goal: 50000 },
    { id: 4, title: 'Disaster Relief', description: 'Join hands in providing disaster relief.', details: 'We provide immediate relief in disaster-stricken areas, including food, water, and medical supplies.', amountRaised: 90000, goal: 120000 },
    { id: 5, title: 'Women Empowerment', description: 'Support skill training for women.', details: 'Our women empowerment program offers vocational training and resources to help women achieve financial independence.', amountRaised: 45000, goal: 80000 },
  ];

  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const openModal = (campaign) => {
    setSelectedCampaign(campaign);
  };

  const closeModal = () => {
    setSelectedCampaign(null);
  };

  return (
    <div className="home-page">
      <div className="content-wrapper">
        <nav className="navbar glass">
          <h2 className="logo">TechGeeks</h2>
          <ul className="nav-links">
            <li><a href="/campaigns">Campaigns</a></li>
            <li><a href="/transparency">Transparency</a></li>
            <li><a href="/donation">Donate</a></li>
            <li><a href="/userdashboard">Dashboard</a></li>
            <li><a href="/">Logout</a></li>
          </ul>
        </nav>

        <header className="header glass">
          <h1>Welcome to Transparent Charity Platform</h1>
          <p>Making a difference, one step at a time.</p>
          <a href="/donation">
            <button className="donate-btn">Donate Now</button>
          </a>
        </header>

        <section className="about glass">
          <h2>About Us</h2>
          <p>
            Transparent Charity Platform is dedicated to creating a trustworthy environment where every contribution matters.
            Join us in empowering communities, ensuring transparency, and making a lasting impact on lives.
          </p>
        </section>

        <div className="campaign-cards">
          <h2>Our Campaigns</h2>
          <div className="cards-container">
            {campaigns.map((campaign) => (
              <div className="card glass" key={campaign.id}>
                <h3>{campaign.title}</h3>
                <p>{campaign.description}</p>
                <progress value={campaign.amountRaised} max={campaign.goal}></progress>
                <p>{`Raised: $${campaign.amountRaised} / Goal: $${campaign.goal}`}</p>
                <button className="btn" onClick={() => openModal(campaign)}>Learn More</button>
              </div>
            ))}
          </div>
        </div>

        {selectedCampaign && (
          <div className="modal">
            <div className="modal-content glass">
              <h2>{selectedCampaign.title}</h2>
              <p>{selectedCampaign.details}</p>
              <p>{`Raised: $${selectedCampaign.amountRaised} / Goal: $${selectedCampaign.goal}`}</p>
              <button className="close-btn" onClick={closeModal}>Close</button>
            </div>
          </div>
        )}

        <section className="statistics glass">
          <h2>Our Impact</h2>
          <div className="stats-container">
            <div className="stat">
              <h3>50+</h3>
              <p>Campaigns Launched</p>
            </div>
            <div className="stat">
              <h3>1M+</h3>
              <p>Lives Impacted</p>
            </div>
            <div className="stat">
              <h3>$5M+</h3>
              <p>Funds Raised</p>
            </div>
            <div className="stat">
              <h3>10K+</h3>
              <p>Volunteers Worldwide</p>
            </div>
          </div>
        </section>

        <footer className="footer glass">
          <p>&copy; 2024 Transparent Charity Platform. All rights reserved.</p>
          <div className="footer-links">
            <a href="/about">About</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </div>
          <div className="social-links">
            <a href="https://facebook.com">Facebook</a>
            <a href="https://twitter.com">Twitter</a>
            <a href="https://instagram.com">Instagram</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
