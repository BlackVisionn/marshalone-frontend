// src/components/Home.tsx
import React from 'react';
import RaceCard from './RaceCard';
import { Race } from '../types/types';

export const races: Race[] = [
  {
    image: 'https://medialounge.ru/wp-content/uploads/2023/12/kupit-kategoriyu-A.png',
    name: 'Гонка 2',
    organizer: 'Организатор 1',
    city: 'Волгоград',
    date: '26.06.2024',
    type: 'Экстрим-эндуро на мотоциклах',
    participants: 26,
    participantsList: [
      'Иван Иванов',
      'Петр Петров',
      'Сергей Сергеев',
      'Александр Александров',
      'Дмитрий Дмитриев',
      'Николай Николаев',
      'Андрей Андреев',
      'Антон Антонов',
      'Евгений Евгеньев',
      'Владимир Владимиров',
    ],
  },
  {
    image: 'https://medialounge.ru/wp-content/uploads/2023/12/kupit-kategoriyu-A.png',
    name: 'TEST 32452',
    organizer: 'Организатор 64545',
    city: 'moscow',
    date: '26.05.2024',
    type: 'Экстрим на мотоциклах',
    participants: 10,
    participantsList: [
      'Иван Иванов',
      'Петр Петров',
      'Сергей Сергеев',
    ],
  },
  // Другие гонки...
];

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Главная страница</h1>
      <div className="race-cards">
        {races.map((race, index) => (
          <RaceCard key={index} race={race} />
        ))}
      </div>
    </div>
  );
};

export default Home;
