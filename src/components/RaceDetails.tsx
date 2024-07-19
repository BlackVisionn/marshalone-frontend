import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/RaceDetails.css';
import { Race } from '../types/types';

const RaceDetails: React.FC = () => {
  const { state } = useLocation();
  const race = state as Race;

  if (!race) {
    return <div>Гонка не найдена</div>;
  }

  return (
    <div className="race-details">
      <img src={race.image} alt={race.name} className="race-image" />
      <h2>{race.name}</h2>
      <p>Организатор: {race.organizer}</p>
      <p>Город: {race.city}</p>
      <p>Дата: {race.date}</p>
      <p>Тип: {race.type}</p>
      <p>Участники: {race.participants}</p>
      <h3>Список участников</h3>
      <ul>
        {race.participantsList.map((participant, index) => (
          <li key={index}>{participant}</li>
        ))}
      </ul>
    </div>
  );
};

export default RaceDetails;
