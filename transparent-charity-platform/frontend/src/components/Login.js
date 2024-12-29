import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const [activeTab, setActiveTab] = useState("donor");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home"); 
  };

  return (
    <div className="login-background">
      <div className="login-container">
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
          <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Login</h2>
          <form onSubmit={handleLogin}>
            <label>
              {activeTab === "charity" ? "Charity Number" : "Email"}
              <input
                type={activeTab === "charity" ? "text" : "email"}
                placeholder={
                  activeTab === "charity" ? "Charity Number" : "Enter your email"
                }
                required
              />
            </label>
            <label>
              Password
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                />
                <span className="toggle-password" onClick={togglePasswordVisibility}>
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>
            </label>
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" /> Remember me
              </label>
              <button type="button" className="forgot-password" onClick={() => alert('Redirect to password recovery')}>
                Forgot your password?
              </button>
            </div>
            <button type="submit" className="login-button">
              Log in
            </button>
          </form>
          <div className="signup-link">
            Not yet on Transparent Charity?{" "}
            <a href="/signup">Create an account</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;