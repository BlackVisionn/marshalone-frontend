import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaMotorcycle, FaUsers } from 'react-icons/fa';
import '../styles/RaceCard.css';
import { Race } from '../types/types';

interface RaceCardProps {
  race: Race;
}

const RaceCard: React.FC<RaceCardProps> = ({ race }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/race-details/${race.name}`, { state: race });
  };

  return (
    <div className="race-card" onClick={handleCardClick}>
      <img src={race.image} alt={race.name} className="race-image" />
      <h3 className="race-name">{race.name}</h3>
      <div className="race-info">
        <p>
          <FaCalendarAlt className="icon" /> {race.date}
        </p>
        <p>
          <FaMotorcycle className="icon" /> {race.type}
        </p>
        <p>
          <FaUsers className="icon" /> {race.participants}
        </p>
      </div>
    </div>
  );
};

export default RaceCard;
