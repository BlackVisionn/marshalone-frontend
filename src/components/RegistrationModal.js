import React, { useState } from 'react';
import '../styles/RegistrationModal.css';

const RegistrationModal = ({ race, closeModal }) => {
  const [teamName, setTeamName] = useState('');
  const [desiredNumber, setDesiredNumber] = useState('');

  const handleRegister = () => {
    // Логика регистрации на гонку
    console.log('Регистрация на гонку:', {
      teamName,
      desiredNumber,
    });
    closeModal();
  };

  return (
    <div className="registration-modal">
      <div className="registration-modal-content">
        <h2>{race.name}</h2>
        <p><strong>Организатор:</strong> {race.organizer}</p>
        <p><strong>Город:</strong> {race.city}</p>
        <p><strong>Дата:</strong> {race.date}</p>
        <p><strong>Тип:</strong> {race.type}</p>
        <p><strong>Участники:</strong> {race.participants}</p>
        <p>Участники любого пола и возраста могут участвовать в этой гонке.</p>
        <input
          type="text"
          placeholder="Название команды"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Желаемый номер"
          value={desiredNumber}
          onChange={(e) => setDesiredNumber(e.target.value)}
        />
        <p>Занятые номера: 101, 102, 103</p>
        <button onClick={handleRegister}>Зарегистрироваться</button>
        <button onClick={closeModal}>Отмена</button>
      </div>
    </div>
  );
};

export default RegistrationModal;
