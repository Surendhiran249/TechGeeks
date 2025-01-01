import React, { useState, useEffect } from 'react';
import './UserDashboard.css';
import { Link } from 'react-router-dom';

const initialCampaigns = [
  { name: 'Education for All', amount: 100 },
  { name: 'Healthcare Support', amount: 150 },
  { name: 'Food Distribution', amount: 200 },
  { name: 'Disaster Relief', amount: 250 },
  { name: 'Women Empowerment', amount: 180 },
];

const UserDashboard = () => {
  const [campaigns, setCampaigns] = useState(initialCampaigns);
  const [fundsRaised, setFundsRaised] = useState(0);
  const [donationsMade, setDonationsMade] = useState(0);
  const [campaignsSupported, setCampaignsSupported] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomCampaignIndex = Math.floor(Math.random() * campaigns.length);
      const newAmount = Math.floor(Math.random() * 100) + 1; 
      const updatedCampaigns = [...campaigns];
      updatedCampaigns[randomCampaignIndex].amount += newAmount;

      setCampaigns(updatedCampaigns);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [campaigns]);

  useEffect(() => {
    const totalFunds = campaigns.reduce((total, campaign) => total + campaign.amount, 0);
    const totalDonations = campaigns.reduce((total, campaign) => total + (campaign.amount > 0 ? 1 : 0), 0);

    setFundsRaised(totalFunds);
    setDonationsMade(totalDonations);
    setCampaignsSupported(campaigns.length);
  }, [campaigns]);

  return (
    <div className="user-dashboard">
      <header className="header glass">
        <Link to="/home" className="back-home">Home</Link>
        <h1>Your Dashboard</h1>
      </header>

      <div className="dashboard-content">
        <div className="donation-history glass animate__animated animate__fadeIn">
          <h2>Donation History</h2>
          <ul>
            {campaigns.map((campaign, index) => {
              const barWidth = Math.min((campaign.amount / 250) * 100, 100); 
              return (
                <li key={index} className="donation-item animate__animated animate__fadeIn">
                  <span className="campaign-name">{campaign.name}</span>
                  <div className="bar-container">
                    <div className="bar" style={{ width: `${barWidth}%` }}></div>
                  </div>
                  <span>${campaign.amount}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="saved-campaigns glass animate__animated animate__fadeInUp">
          <h2>Saved Campaigns</h2>
          <p>No saved campaigns yet.</p>
        </div>

        <div className="statistics glass animate__animated animate__fadeInUp">
          <h2>Campaign Statistics</h2>
          <div className="stats-container">
            <div className="stat animate__animated animate__fadeInLeft">
              <h3>Funds Raised</h3>
              <p>${fundsRaised}</p>
            </div>
            <div className="stat animate__animated animate__fadeInUp">
              <h3>Donations Made</h3>
              <p>{donationsMade}</p>
            </div>
            <div className="stat animate__animated animate__fadeInRight">
              <h3>Campaigns Supported</h3>
              <p>{campaignsSupported}</p>
            </div>
          </div>
        </div>

        <div className="graphs glass animate__animated animate__fadeIn">
          <h2>Campaign Progress</h2>
          <div className="graph-container">
            <div className="bar-graph animate__animated animate__zoomIn">
              <h4>Funds Raised by Campaign</h4>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${(fundsRaised / 100) * 100}%` }}></div>
              </div>
            </div>

            <div className="line-graph animate__animated animate__zoomIn">
              <h4>Donation Progress</h4>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${(donationsMade / 10) * 100}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="maps glass animate__animated animate__fadeIn">
          <h2>Campaign Location</h2>
          <div className="map-container">
            <p>Map of Campaign Locations - Placeholder for Google Maps or other map visualization.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
