import React, { useState } from 'react';

const LoginPage = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Predefined valid credentials
  const validCredentials = {
    username: 'user@example.com',
    password: 'password123',
  };

  const handleLogin = () => {
    // Check if the entered credentials match the predefined ones
    if (username === validCredentials.username && password === validCredentials.password) {
      // Simulate successful login and update user state
      setUser({ name: 'John Doe', email: username });
    } else {
      // If credentials don't match, show an error
      alert('Incorrect credentials. Please try again.');
    }
  };

  return (
    <div>
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
  );
};

export default LoginPage;
