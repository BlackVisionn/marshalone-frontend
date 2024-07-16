// src/components/Organizer.tsx
import React from 'react';
import '../styles/Organizer.css';

const Organizer: React.FC = () => {
  return (
    <div className="organizer-container">
      <h2>Описание</h2>
      <p>В процессе многолетней организации гонок у команды возникли проблемы с подведением результатов и временным интервалом.</p>
      <h2>Преимущества</h2>
      <ul>
        <li>Мы можем взять на себя подведение результатов гонки, так как мы имеем необходимое оборудование для этого</li>
        <li>...</li>
      </ul>
      <h2>Как стать организатором</h2>
      <ul>
        <li>Создайте свою гонку на странице</li>
        <li>...</li>
      </ul>
    </div>
  );
};

export default Organizer;
