import React, { useState } from 'react';
import '../styles/ProfileSetup.css';

const ProfileSetup = () => {
  const [profile, setProfile] = useState({
    avatar: '',
    fullName: '',
    phoneNumber: '',
    city: '',
    birthDate: '',
    nationality: '',
    profileStatus: 'open',
    password: '',
    confirmPassword: '',
    email: '',
    insuranceDate: '',
    insuranceNumber: '',
    team: '',
    sportsTitles: '',
    motto: '',
    about: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile({ ...profile, avatar: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save profile data
    console.log(profile);
  };

  return (
    <div className="profile-setup">
      <h2>Донастройка профиля</h2>
      <form onSubmit={handleSubmit}>
        <div className="avatar-section">
          <label htmlFor="avatar">
            <img
              src={profile.avatar || 'default-avatar.png'}
              alt="Profile Avatar"
              className="profile-avatar"
            />
          </label>
          <input type="file" id="avatar" accept="image/*" onChange={handleAvatarChange} style={{ display: 'none' }} />
        </div>
        <div className="form-group">
          <label htmlFor="fullName">ФИО</label>
          <input type="text" id="fullName" name="fullName" value={profile.fullName} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Номер телефона</label>
          <input type="text" id="phoneNumber" name="phoneNumber" value={profile.phoneNumber} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="city">Город</label>
          <input type="text" id="city" name="city" value={profile.city} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="birthDate">Дата рождения</label>
          <input type="date" id="birthDate" name="birthDate" value={profile.birthDate} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="nationality">Гражданство</label>
          <input type="text" id="nationality" name="nationality" value={profile.nationality} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="profileStatus">Статус профиля</label>
          <select id="profileStatus" name="profileStatus" value={profile.profileStatus} onChange={handleInputChange}>
            <option value="open">Открытый</option>
            <option value="closed">Закрытый</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input type="password" id="password" name="password" value={profile.password} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Повторите пароль</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={profile.confirmPassword} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Электронная почта</label>
          <input type="email" id="email" name="email" value={profile.email} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="insuranceDate">Дата страховки</label>
          <input type="date" id="insuranceDate" name="insuranceDate" value={profile.insuranceDate} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="insuranceNumber">Номер страховки</label>
          <input type="text" id="insuranceNumber" name="insuranceNumber" value={profile.insuranceNumber} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="team">Команда</label>
          <input type="text" id="team" name="team" value={profile.team} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="sportsTitles">Спортивные звания</label>
          <input type="text" id="sportsTitles" name="sportsTitles" value={profile.sportsTitles} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="motto">Девиз</label>
          <input type="text" id="motto" name="motto" value={profile.motto} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="about">О себе</label>
          <textarea id="about" name="about" value={profile.about} onChange={handleInputChange}></textarea>
        </div>
        <button type="submit" className="save-button">Сохранить</button>
      </form>
    </div>
  );
};

export default ProfileSetup;
