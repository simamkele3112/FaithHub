import React, { useState } from 'react';
import './LoginPage.css'; // Import the stylesheet

const LoginPage = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const validCredentials = {
    username: 'user@example.com',
    password: 'password123',
  };

  const handleLogin = () => {
    if (username === validCredentials.username && password === validCredentials.password) {
      setUser({ name: 'John Doe', email: username });
    } else {
      alert('Incorrect credentials. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username (e.g., user@example.com)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password (e.g., password123)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Log In</button>
      </div>
    </div>
  );
};

export default LoginPage;
