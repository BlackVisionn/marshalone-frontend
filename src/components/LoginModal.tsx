// src/components/LoginModal.tsx
import React, { useState } from 'react';
import '../styles/LoginModal.css';
import { useStore } from '../store/store';

interface LoginModalProps {
  closeModal: () => void;
  onLogin: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ closeModal }) => {
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useStore();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement authentication logic
    login({ fullName: 'Demo User', avatar: 'default-avatar.png' });
    closeModal();
  };

  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal}>X</button>
        <h2>{isLogin ? 'Вход' : 'Регистрация'}</h2>
        <form onSubmit={handleSubmit}>
          {isLogin ? (
            <>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="password">Пароль:</label>
              <input type="password" id="password" name="password" required />
            </>
          ) : (
            <>
              <label htmlFor="username">Имя пользователя:</label>
              <input type="text" id="username" name="username" required />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="password">Пароль:</label>
              <input type="password" id="password" name="password" required />
            </>
          )}
          <button type="submit">{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
        </form>
        <button className="toggle-button" onClick={toggleForm}>
          {isLogin ? 'Нет аккаунта? Зарегистрируйтесь' : 'Уже есть аккаунт? Войдите'}
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
