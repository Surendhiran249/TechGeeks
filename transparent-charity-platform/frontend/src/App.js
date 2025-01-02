import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Auth/Login'; 
import Signup from './components/Auth/Signup'; 
import Home from './components/Home';
import Campaigns from './components/Campaigns/Campaigns';
import Donation from './components/Donations/Donations';
import Transparency from './components/Transparency/Transparency';
import UserDashboard from './components/Dashboard/UserDashboard';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/campaigns"
          element={
            <ProtectedRoute>
              <Campaigns />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donation"
          element={
            <ProtectedRoute>
              <Donation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/transparency"
          element={
            <ProtectedRoute>
              <Transparency />
            </ProtectedRoute>
          }
        />
        <Route
          path="/userdashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
