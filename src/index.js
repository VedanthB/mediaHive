import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter as Router } from "react-router-dom";
import {
  AuthProvider,
  CategoryProvider,
  FiltersProvider,
  LikedVideosProvider,
  PlaylistProvider,
  VideosProvider,
  WatchLaterProvider,
} from "./frontend/context/providers";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CategoryProvider>
        <AuthProvider>
          <VideosProvider>
            <FiltersProvider>
              <PlaylistProvider>
                <WatchLaterProvider>
                  <LikedVideosProvider>
                    <App />
                  </LikedVideosProvider>
                </WatchLaterProvider>
              </PlaylistProvider>
            </FiltersProvider>
          </VideosProvider>
        </AuthProvider>
      </CategoryProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
