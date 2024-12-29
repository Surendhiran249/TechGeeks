import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Donations.css';

const Donation = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [cardDetails, setCardDetails] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (amount && name) {
      setShowPopup(true);
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
        {selectedMethod === 'bank' && (
          <div className="bank-transfer">
            <h3>Bank Transfer Details:</h3>
            <p>Please transfer the amount to the following bank account:</p>
            <p>Account Number: 1234567890</p>
            <p>IFSC Code: ABCD1234</p>
          </div>
        )}
        {selectedMethod === 'cash' && (
          <div className="cash-donation">
            <h3>Visit our office for cash donations:</h3>
            <p>We are located at: XYZ Street, City, ZIP Code</p>
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
