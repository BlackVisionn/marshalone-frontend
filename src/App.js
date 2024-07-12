import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Organizer from './components/Organizer';
import RaceDetails from './components/RaceDetails';
import ProfileSetup from './components/ProfileSetup';
import UserProfile from './components/UserProfile';
import './styles/App.css';
import LoginModal from './components/LoginModal';
import Header from './components/Header';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    closeModal();
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <Router>
      <div className="app">
        <Header isAuthenticated={isAuthenticated} user={user} onLogout={handleLogout} openModal={openModal} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/organizer" element={<Organizer />} />
            <Route path="/race-details" element={<RaceDetails />} />
            <Route path="/profile-setup" element={<ProfileSetup />} />
            <Route path="/profile" element={<UserProfile user={user} />} />
          </Routes>
        </div>
        <footer className="footer">
          &copy; 2024 MarshalOne. All rights reserved.
        </footer>
        {isModalOpen && <LoginModal closeModal={closeModal} onLogin={handleLogin} />}
      </div>
    </Router>
  );
}

export default App;
