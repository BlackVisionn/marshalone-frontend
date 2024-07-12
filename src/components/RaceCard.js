// RaceCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaMotorcycle, FaUsers } from 'react-icons/fa';
import '../styles/RaceCard.css';

const RaceCard = ({ race }) => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/race-details', { state: { race } });
  };

  const { image, name, organizer, city, date, type, participants } = race;

  return (
    <div className="race-card">
      <div className="race-card-left">
        <img src={image} alt={name} className="race-image" />
        <button className="register-button" onClick={handleRegisterClick}>Зарегистрироваться</button>
      </div>
      <div className="race-card-right">
        <h2>{name}</h2>
        <p><FaCalendarAlt /> {date}</p>
        <p><FaMotorcycle /> {type}</p>
        <p><FaUsers /> {participants}</p>
        <p><strong>Организатор:</strong> {organizer}</p>
        <p><strong>Город:</strong> {city}</p>
      </div>
    </div>
  );
};

export default RaceCard;
