import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './LoginPage.css'; // Import the stylesheet

const LoginPage = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = () => {
    if (username && password) {
      // Set the user with additional details
      setUser({ 
        name: 'John Doe', 
        email: username, 
        joinDate: new Date().toLocaleDateString() // Placeholder for the join date
      });

      // Redirect the user to the home page or a specific page after login
      navigate('/'); // Redirect to the homepage
    } else {
      alert('Please enter a valid username and password.');
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
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Log In</button>
      </div>
    </div>
  );
};

export default LoginPage;
