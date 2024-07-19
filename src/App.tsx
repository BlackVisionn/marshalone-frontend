import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import LoginModal from './components/LoginModal';
import AppRoutes from './routes/routes';
import { useModalStore } from './store/modalStore';

const App: React.FC = () => {
  const isLoginModalOpen = useModalStore((state) => state.isLoginModalOpen);
  const closeLoginModal = useModalStore((state) => state.closeLoginModal);

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <AppRoutes />
        </div>
        <footer className="footer">
          &copy; 2024 MarshalOne. All rights reserved.
        </footer>
        {isLoginModalOpen && <LoginModal closeModal={closeLoginModal} />}
      </div>
    </Router>
  );
};

export default App;
