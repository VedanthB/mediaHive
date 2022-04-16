import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';

import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider, CategoryProvider } from './frontend/context/providers';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CategoryProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </CategoryProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
