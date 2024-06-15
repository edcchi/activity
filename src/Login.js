import React, { useState } from 'react';
import './App.css';

const predefinedUsers = [
  { username: 'admin1', password: 'pass1' },
  { username: 'admin2', password: 'pass2' },
];

function Login({ setIsLoggedIn, setCurrentPage }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = predefinedUsers.find(user => user.username === username && user.password === password);
    if (user) {
      setIsLoggedIn(true);
      setCurrentPage('Home');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
