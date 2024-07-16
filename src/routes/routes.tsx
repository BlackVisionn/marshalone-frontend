import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Organizer from '../components/Organizer';
import RaceDetails from '../components/RaceDetails';
import ProfileSetup from '../components/ProfileSetup';
import UserProfile from '../components/UserProfile';
import { User } from '../types/types';

interface AppRoutesProps {
  user: User;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ user }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/organizer" element={<Organizer />} />
      <Route path="/race-details" element={<RaceDetails />} />
      <Route path="/profile-setup" element={<ProfileSetup />} />
      <Route path="/profile" element={<UserProfile user={user} />} />
    </Routes>
  );
};

export default AppRoutes;
