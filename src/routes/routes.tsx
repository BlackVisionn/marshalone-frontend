import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Organizer from '../components/Organizer';
import ProfileSetup from '../components/ProfileSetup';
import RaceDetails from '../components/RaceDetails';
import UserProfile from '../components/UserProfile';
import NotFound from '../components/NotFound';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/organizer" element={<Organizer />} />
      <Route path="/profile-setup" element={<ProfileSetup />} />
      <Route path="/race-details/:raceName" element={<RaceDetails />} />
      <Route path="/profile" element={<UserProfile user={null} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
