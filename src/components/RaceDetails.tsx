// src/components/RaceDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { races } from './Home';
import '../styles/RaceDetails.css';

const RaceDetails: React.FC = () => {
  const { raceName } = useParams<{ raceName: string }>();
  const race = races.find((r) => r.name === raceName);

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
