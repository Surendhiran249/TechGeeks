import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Campaigns.css';

const Campaigns = () => {
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const navigate = useNavigate();

  const campaigns = [
    { id: 1, title: 'Education for All', description: 'Providing resources to schools.', details: 'Delivering textbooks, computers, and trained teachers to underprivileged schools in rural areas.' },
    { id: 2, title: 'Healthcare Support', description: 'Providing medical aid.', details: 'Free health checkups, distributing essential medicines, and setting up mobile health clinics.' },
    { id: 3, title: 'Food Distribution', description: 'Feeding the hungry.', details: 'Partnering with NGOs to distribute meals to homeless shelters and slums.' },
    { id: 4, title: 'Disaster Relief', description: 'Helping disaster victims.', details: 'Providing food, water, and shelter to victims of natural disasters.' },
    { id: 5, title: 'Women Empowerment', description: 'Training women for employment.', details: 'Providing vocational training and financial support to help women achieve independence.' },
    { id: 6, title: 'Environmental Conservation', description: 'Protecting our planet.', details: 'Planting trees, cleaning rivers, and promoting eco-friendly practices.' },
    { id: 7, title: 'Animal Welfare', description: 'Caring for animals.', details: 'Rescuing stray animals, setting up shelters, and promoting adoption.' },
    { id: 8, title: 'Youth Leadership Programs', description: 'Developing leaders of tomorrow.', details: 'Organizing workshops and training programs to empower youth.' },
  ];

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
