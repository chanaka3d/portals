import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TokenProcessor from './TokenProcessor';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  <Router>
    <Routes>
      <Route path='/publisher/token' element={<TokenProcessor />} />
      <Route exact path='/' element={<App />} />
    </Routes>
  </Router>
);