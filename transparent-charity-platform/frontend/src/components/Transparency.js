import React, { useState } from 'react';
import './Transparency.css';

const Transparency = () => {
  const transparencyData = [
    { id: 1, title: 'Funding Allocation', description: 'Transparent distribution of funds raised for each campaign.', details: 'We believe in complete transparency in how funds are allocated to each cause. Each donation is tracked and accounted for to ensure donors know how their contributions are being used.' },
    { id: 2, title: 'Impact Reports', description: 'Detailed reports on the progress of ongoing campaigns.', details: 'Our impact reports give detailed insights into how each campaign is progressing, the amount raised, and the goals we are working towards.' },
    { id: 3, title: 'Volunteer Updates', description: 'Regular updates on volunteer activities and their contributions.', details: 'Our platform keeps volunteers and supporters updated on the activities and contributions they have made to various campaigns.' },
    { id: 4, title: 'Donation Tracking', description: 'Track your donation and its impact.', details: 'Every donation made is tracked, and donors can see the direct impact of their contribution on the campaign and cause they supported.' },
  ];

  const [selectedData, setSelectedData] = useState(null);

  const openModal = (data) => {
    setSelectedData(data);
  };

  const closeModal = () => {
    setSelectedData(null);
  };

  const progressData = [
    { title: "Campaign A", goal: 100000, raised: 65000 },
    { title: "Campaign B", goal: 50000, raised: 45000 },
    { title: "Campaign C", goal: 75000, raised: 30000 },
  ];

  return (
    <div className="transparency-page">
      <div className="content-wrapper">
        <a href="/home" className="back-btn glass">Home</a>
        <section className="transparency-cards">
          <h2>Transparency Reports</h2>
          <div className="cards-container">
            {transparencyData.map((data) => (
              <div className="card glass" key={data.id}>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <button className="btn" onClick={() => openModal(data)}>Learn More</button>
              </div>
            ))}
          </div>
        </section>

        <section className="progress-section">
          <h2>Campaign Funding Progress</h2>
          <div className="progress-container">
            {progressData.map((campaign, index) => (
              <div key={index} className="progress-card">
                <h3>{campaign.title}</h3>
                <div className="progress-bar-wrapper">
                  <div
                    className="progress-bar"
                    style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                  ></div>
                </div>
                <p>Goal: ${campaign.goal} | Raised: ${campaign.raised}</p>
              </div>
            ))}
          </div>
        </section>

        {selectedData && (
          <div className="modal">
            <div className="modal-content glass">
              <h2>{selectedData.title}</h2>
              <p>{selectedData.details}</p>
              <button className="close-btn" onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transparency;
