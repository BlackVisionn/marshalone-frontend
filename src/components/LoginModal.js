import React, { useState } from 'react';
import '../styles/LoginModal.css';

const LoginModal = ({ closeModal }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal}>X</button>
        <h2>{isLogin ? 'Вход' : 'Регистрация'}</h2>
        <form>
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
