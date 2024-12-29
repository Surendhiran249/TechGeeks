import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login'; 
import Signup from './components/Signup'; 
import Home from './components/Home';
import Campaigns from './components/Campaigns';
import Donation from './components/Donations';
import Transparency from './components/Transparency';
import UserDashboard from './components/UserDashboard';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/transparency" element={<Transparency />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;