import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuoteWidget from '../components/QuoteWidget';
import './HomePage.css';

const HomePage = ({ user }) => {
  const [verse, setVerse] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  useEffect(() => {
    const fetchVerse = async () => {
      try {
        const response = await fetch('https://bible-api.com/jeremiah+29:11');
        if (!response.ok) throw new Error('Failed to fetch verse');
        const data = await response.json();
        setVerse(data.text);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchVerse();
  }, []);

  if (loading) return <div className="loading-message">Loading Bible verse...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="home-container">
      <h1>Bible Verse of the Day</h1>
      <p>“{verse}” - Jeremiah 29:11</p>
      <QuoteWidget />
      
    </div>
  );
};

export default HomePage;
