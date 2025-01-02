import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Campaigns.css';

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/campaigns/");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setCampaigns(data);
      } catch (error) {
        console.error("Failed to fetch campaigns:", error);
      }
    };

    fetchCampaigns();
  }, []);

  const handleViewDetails = (campaign) => {
    setSelectedCampaign(campaign);
  };

  const closeModal = () => {
    setSelectedCampaign(null);
  };

  return (
    <div className="campaigns-page">
      <button className="back-home-btn" onClick={() => navigate('/home')}>
        Home
      </button>

      <header className="campaigns-header">
        <h1>Our Campaigns</h1>
        <p>Explore our impactful initiatives and join us in making a difference.</p>
      </header>

      <div className="campaign-list">
        {campaigns.map((campaign) => (
          <div className="campaign-card" key={campaign.id}>
            <h2>{campaign.title}</h2>
            <p>{campaign.description}</p>
            <button className="campaign-btn" onClick={() => handleViewDetails(campaign)}>Learn More</button>
          </div>
        ))}
      </div>

      {selectedCampaign && (
        <div className="campaign-modal">
          <div className="campaign-modal-content">
            <h2>{selectedCampaign.title}</h2>
            <p>{selectedCampaign.details}</p>
            <button className="campaign-close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Campaigns;
