// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { useStore } from '../store/store';

interface HeaderProps {
  openModal: () => void;
  onLogout: () => void;
  isAuthenticated: boolean;
}

const Header: React.FC<HeaderProps> = ({ openModal, isAuthenticated }) => {
  const { user, logout } = useStore();

  return (
    <nav className="navbar">
      <Link to="/organizer" className="navbar-button">Стать организатором</Link>
      <div className="navbar-logo" onClick={() => window.location.href = '/'}>
        <span className="logo-bold">marshal</span>
        <span className="logo-normal">one</span>
        <span className="logo-number">3</span>
      </div>
      {isAuthenticated && user ? (
        <div className="navbar-user">
          <span>{user.fullName}</span>
          <img src={user.avatar || 'default-avatar.png'} alt="Profile Avatar" className="navbar-avatar" />
          <div className="dropdown">
            <Link to="/profile">Профиль</Link>
            <button onClick={logout}>Выйти</button>
          </div>
        </div>
      ) : (
        <button className="navbar-button" onClick={openModal}>Войти</button>
      )}
    </nav>
  );
};

export default Header;