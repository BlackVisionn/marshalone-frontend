// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/App.css';
import LoginModal from './components/LoginModal';
import Header from './components/Header';
import AppRoutes from './routes/routes';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    closeModal();
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="app">
        <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} openModal={openModal} />
        <div className="content">
          <AppRoutes user={null} /> {/* Заменить null на актуальный объект пользователя */}
        </div>
        <footer className="footer">
          &copy; 2024 MarshalOne. All rights reserved.
        </footer>
        {isModalOpen && <LoginModal closeModal={closeModal} onLogin={handleLogin} />}
      </div>
    </Router>
  );
};

export default App;
