import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/RaceDetails.css';
import LoginModal from './LoginModal';
import RegistrationModal from './RegistrationModal';

const participantsData = [
  { id: 1, registrationDate: '01.01.2024', time: '10:00', avatar: 'https://via.placeholder.com/50', name: 'Иван Иванов', city: 'Москва', age: 25, number: 101 },
  { id: 2, registrationDate: '02.01.2024', time: '11:00', avatar: 'https://via.placeholder.com/50', name: 'Петр Петров', city: 'Санкт-Петербург', age: 30, number: 102 },
  { id: 3, registrationDate: '03.01.2024', time: '12:00', avatar: 'https://via.placeholder.com/50', name: 'Сергей Сергеев', city: 'Казань', age: 28, number: 103 },
  { id: 4, registrationDate: '03.01.2024', time: '12:00', avatar: 'https://via.placeholder.com/50', name: 'Сергей Сергеев', city: 'Казань', age: 28, number: 103 },
  { id: 5, registrationDate: '03.01.2024', time: '12:00', avatar: 'https://via.placeholder.com/50', name: 'Сергей Сергеев', city: 'Казань', age: 28, number: 103 },
  { id: 6, registrationDate: '03.01.2024', time: '12:00', avatar: 'https://via.placeholder.com/50', name: 'Сергей Сергеев', city: 'Казань', age: 28, number: 103 },
  { id: 7, registrationDate: '03.01.2024', time: '12:00', avatar: 'https://via.placeholder.com/50', name: 'Сергей Сергеев', city: 'Казань', age: 28, number: 103 },
  
];

const RaceDetails = ({ isAuthenticated }) => {
  const location = useLocation();
  const race = location.state.race;

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRegisterClick = () => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
    } else {
      setIsRegistrationModalOpen(true);
    }
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const closeRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
  };

  const filteredParticipants = participantsData.filter((participant) =>
    participant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="race-details">
      <div className="race-info">
        <img src={race.image} alt={race.name} className="race-info-image" />
        <div className="race-info-text">
          <h2>{race.name}</h2>
          <p><strong>Организатор:</strong> {race.organizer}</p>
          <p><strong>Город:</strong> {race.city}</p>
          <p><strong>Дата:</strong> {race.date}</p>
          <p><strong>Тип:</strong> {race.type}</p>
          <p><strong>Участники:</strong> {race.participants}</p>
        </div>
      </div>
      <p>
        Итак, участники мотозаезда "Одиссея 2-100" будут иметь возможность испытать свои навыки вождения на различных типах поверхностей и испытать себя в сложных условиях...
      </p>
      <button className="register-class-button" onClick={handleRegisterClick}>
        Зарегистрироваться в этот класс
      </button>
      <div className="search-participants">
        <input
          type="text"
          placeholder="Поиск участников"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="participants-container">
        <div className="participants-header">
          <h3>Список участников</h3>
          <button className="toggle-button" onClick={toggleCollapse}>
            {isCollapsed ? 'Развернуть' : 'Свернуть'}
          </button>
        </div>
        <div className={`participants-list ${isCollapsed ? 'collapsed' : ''}`}>
          {filteredParticipants.map((participant, index) => (
            <div key={participant.id} className="participant-card">
              <div className="participant-header">
                <span>{index + 1}. {participant.registrationDate} {participant.time}</span>
              </div>
              <div className="participant-info">
                <img src={participant.avatar} alt={participant.name} className="participant-avatar" />
                <span className="participant-number">{participant.number}</span>
              </div>
              <h3>{participant.name}</h3>
              <p>{participant.city}</p>
              <p>{participant.age} лет</p>
            </div>
          ))}
        </div>
      </div>
      {isLoginModalOpen && <LoginModal closeModal={closeLoginModal} />}
      {isRegistrationModalOpen && <RegistrationModal race={race} closeModal={closeRegistrationModal} />}
    </div>
  );
};

export default RaceDetails;
