import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css';
import App from './App';
import Config from 'Conf/Settings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain={Config.IDP_DOMAIN}
    clientId={Config.IDP_CLIENT_ID}
    redirectUri={Config.origin}
  >
    <App />
  </Auth0Provider>
  </React.StrictMode>
);