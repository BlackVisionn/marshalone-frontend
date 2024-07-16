import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/UserProfile.css';
import { User } from '../types/types';

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="user-profile">
      <h2>Профиль пользователя</h2>
      <div className="profile-info">
        <img src={user.avatar || 'default-avatar.png'} alt="Profile Avatar" className="profile-avatar" />
        <div className="profile-details">
          <p><strong>ФИО:</strong> {user.fullName}</p>
          <p><strong>Город:</strong> {user.city}</p>
          <p><strong>Номер телефона:</strong> {user.phoneNumber}</p>
          <p><strong>Дата рождения:</strong> {user.birthDate}</p>
          <p><strong>Возраст:</strong> {user.age}</p>
          <p><strong>Гражданство:</strong> {user.nationality}</p>
        </div>
      </div>
      <Link to="/profile-setup" className="edit-profile-button">Редактировать профиль</Link>
    </div>
  );
};

export default UserProfile;
