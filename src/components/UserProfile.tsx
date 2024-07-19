import React from 'react';
import '../styles/UserProfile.css';
import { User } from '../types/types';

interface UserProfileProps {
  user: User | null;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  if (!user) {
    return <div>Пользователь не найден</div>;
  }

  return (
    <div className="user-profile">
      <h2>Профиль пользователя</h2>
      <img src={user.avatar || 'default-avatar.png'} alt="Profile Avatar" className="profile-avatar" />
      <p>Имя: {user.fullName}</p>
    </div>
  );
};

export default UserProfile;
