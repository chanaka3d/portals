import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css';
import App from './App';
import Settings from 'Settings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain={Settings.IDP_DOMAIN}
    clientId={Settings.IDP_CLIENT_ID}
    redirectUri={Settings.origin}
  >
    <App />
  </Auth0Provider>
  </React.StrictMode>
);