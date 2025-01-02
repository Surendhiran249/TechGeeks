import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Donations.css';

const Donation = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [cardDetails, setCardDetails] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [bankDetails, setBankDetails] = useState(null);
  const [cashDetails, setCashDetails] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch bank and cash donation details
    const fetchDonationDetails = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/donations");
        const data = await response.json();
        // Assume response contains bank and cash details
        setBankDetails(data.bankDetails);
        setCashDetails(data.cashDetails);
      } catch (error) {
        console.error("Error fetching donation details:", error);
      }
    };

    fetchDonationDetails();
  }, []);

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCardDetailsChange = (event) => {
    setCardDetails(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Check if all required fields are filled
    if (amount && name && selectedMethod) {
      const donationData = {
        amount: amount,
        name: name,
        method: selectedMethod,
        cardDetails: cardDetails,
      };
  
      try {
        const response = await fetch('http://localhost:5000/donations/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(donationData),
        });
  
        if (response.ok) {
          const result = await response.json();
          setShowPopup(true); // Show success popup
        } else {
          throw new Error('Failed to process donation');
        }
      } catch (error) {
        console.error('Error during donation:', error);
        alert('Failed to process donation.');
      }
    } else {
      alert('Please fill all fields');
    }
  };

  const handleHomeRedirect = () => {
    navigate('/home');
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="donation-page">
      <div className="donation-container">
        <header className="donation-header">
          <button className="home-btn" onClick={handleHomeRedirect}>Home</button>
          <h1>Support Our Cause</h1>
          <p>Your contributions can make a big difference in changing lives.</p>
        </header>

        <div className="donation-section">
          <h2>Choose a Donation Method:</h2>
          <select onChange={handleMethodChange} value={selectedMethod}>
            <option value="">Select a Method</option>
            <option value="online">Online Payment (Credit/Debit Card, UPI)</option>
            <option value="bank">Bank Transfer</option>
            <option value="cash">Cash Donation (Visit Our Offices)</option>
          </select>
        </div>

        {selectedMethod === 'online' && (
          <div className="online-payment">
            <h3>Enter your payment details:</h3>
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              required
            />
            <label htmlFor="card-details">Card Details (or UPI ID):</label>
            <input
              type="text"
              id="card-details"
              value={cardDetails}
              onChange={handleCardDetailsChange}
              placeholder="Enter your card details or UPI ID"
              required
            />
          </div>
        )}
        {selectedMethod === 'bank' && bankDetails && (
          <div className="bank-transfer">
            <h3>Bank Transfer Details:</h3>
            <p>Please transfer the amount to the following bank account:</p>
            <p>Account Number: {bankDetails.accountNumber}</p>
            <p>IFSC Code: {bankDetails.ifscCode}</p>
          </div>
        )}
        {selectedMethod === 'cash' && cashDetails && (
          <div className="cash-donation">
            <h3>Visit our office for cash donations:</h3>
            <p>We are located at: {cashDetails.address}</p>
          </div>
        )}

        <div className="impact-section">
          <h3>Your Donation Will Help</h3>
          <p>Every donation helps provide food, education, and healthcare to those in need. Join us in making a change!</p>
        </div>

        <div className="donation-form">
          <h3>Make a Donation</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="amount">Donation Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter amount"
              required
            />
            <button type="submit" className="donate-btn">Donate Now</button>
          </form>
        </div>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h2>Thank You!</h2>
              <p>Your donation of ₹{amount} has been received. Your generosity is making a real difference!</p>
              <button onClick={closePopup} className="close-popup-btn">Close</button>
            </div>
          </div>
        )}

        <footer className="donation-footer">
          <p>Thank you for your generous support!</p>
        </footer>
      </div>
    </div>
  );
};

export default Donation;
