import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [charityNumber, setCharityNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [activeTab, setActiveTab] = useState("donor");
  const navigate = useNavigate();
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const userData = {
      email: email,
      password: password,
      role: activeTab,
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        navigate("/home");
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
          <h2>
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Signup
          </h2>
          <form onSubmit={handleSignup}>
            <label>
              Name
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            {activeTab === "charity" && (
              <label>
                Charity Number
                <input
                  type="text"
                  placeholder="Enter your charity number"
                  value={charityNumber}
                  onChange={(e) => setCharityNumber(e.target.value)}
                  required
                />
              </label>
            )}
            <label>
              Email
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Password
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <label>
              Confirm Password
              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
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
