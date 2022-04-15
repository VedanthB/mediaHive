import React from 'react';

import { Route, Routes } from 'react-router-dom';

// mockman
import Mockman from 'mockman-js';

// pages
import { ExplorePage, LandingPage, LoginPage, SignupPage } from '../pages';

const WebsiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/explore" element={<ExplorePage />} />

      <Route path="/mockman" element={<Mockman />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default WebsiteRoutes;
