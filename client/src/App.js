import React from 'react';
import './App.css';
import Profile from './Profile';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Apis from './Apis';
import Config from 'Conf/Settings';

function App() {

  return (
    <div className="App">
      <nav className="container">
        <input id="nav-toggle" type="checkbox" />
        <div className="logo">
        {Config.API_HOST}
          WSO2 <strong style={{"color": "#153b66", "font-weight": "800"}}>API Manager</strong>
        </div>
        <ul className="links">
          <li className="list">
            <a href="">Home</a>
            <div className="home_underline"></div>
          </li>
          <li className="list">
            <a href="">Products</a>
            <div className="home_underline"></div>
          </li>
          <li className="list">
            <a href="">About</a>
            <div className="home_underline"></div>
          </li>
          <LoginButton /><LogoutButton />
          <Profile />
        </ul>
        <label className="icon-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
      </nav>
      <Apis />
    </div>
  );
}

export default App;
