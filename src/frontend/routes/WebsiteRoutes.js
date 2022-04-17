import React from "react";

import { Route, Routes } from "react-router-dom";

// mockman
import Mockman from "mockman-js";

// pages
import {
  ExplorePage,
  LandingPage,
  LoginPage,
  SignupPage,
  VideoPage,
} from "../pages";
import PrivateRoutes from "./PrivateRoutes";
import LikedVideos from "../pages/LikedVideos";
import WatchLater from "../pages/WatchLater";
import Playlists from "../pages/Playlists";
import History from "../pages/History";

const WebsiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/explore/:id" element={<VideoPage />} />

      <Route path="/mockman" element={<Mockman />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route path="/" element={<PrivateRoutes />}>
        <Route path="/likedVideos" element={<LikedVideos />} />

        <Route path="/watchLater" element={<WatchLater />} />
        <Route path="/playlist" element={<Playlists />} />
        <Route path="/history" element={<History />} />
      </Route>

      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default WebsiteRoutes;
