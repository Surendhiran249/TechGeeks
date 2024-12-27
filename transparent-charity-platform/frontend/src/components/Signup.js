import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [activeTab, setActiveTab] = useState("donor");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="tabs">
          <button
            className={activeTab === "donor" ? "active" : ""}
            onClick={() => handleTabClick("donor")}
          >
            Donor
          </button>
          <button
            className={activeTab === "charity" ? "active" : ""}
            onClick={() => handleTabClick("charity")}
          >
            Charity
          </button>
          <button
            className={activeTab === "admin" ? "active" : ""}
            onClick={() => handleTabClick("admin")}
          >
            Admin
          </button>
        </div>

        <div className="form-container">
          <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Signup</h2>
          <form>
            <label>
              Name
              <input type="text" placeholder="Enter your name" required />
            </label>
            {activeTab === "charity" && (
              <label>
                Charity Number
                <input type="text" placeholder="Enter your charity number" required />
              </label>
            )}
            <label>
              Email
              <input type="email" placeholder="Enter your email" required />
            </label>
            <label>
              Password
              <input type="password" placeholder="Enter your password" required />
            </label>
            <label>
              Confirm Password
              <input type="password" placeholder="Confirm your password" required />
            </label>
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
          <div className="login-link">
            Already have an account? <a href="/login">Log in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
