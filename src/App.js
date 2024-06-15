import React, { useState } from 'react';
import './App.css';
import Login from './Login.js';
import NavBar from './NavBar.js';
import Contact from './Contact.js';
import Home from './Home.js';
import About from './About.js';

function App() {
  const [currentPage, setCurrentPage] = useState('Login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <div className="content">
      {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} setCurrentPage={setCurrentPage} />}
      {isLoggedIn && <NavBar setCurrentPage={setCurrentPage} />}
      </div>
    </div>
  );
}

export default App;
