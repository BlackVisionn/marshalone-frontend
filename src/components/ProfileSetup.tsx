import React, { useState } from 'react';
import '../styles/ProfileSetup.css';

const ProfileSetup: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [avatar, setAvatar] = useState<File | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();    
  };

  return (
    <div className="profile-setup">
      <h2>Заполните информацию о себе</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Полное имя:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <label htmlFor="avatar">Аватар:</label>
        <input
          type="file"
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files ? e.target.files[0] : null)}
        />
        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
};

export default ProfileSetup;
