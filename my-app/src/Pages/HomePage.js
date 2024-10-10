// Pages/HomePage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuoteWidget from '../components/QuoteWidget';

const HomePage = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login'); // Redirect to login if not logged in
    }
  }, [user, navigate]);

  if (!user) {
    return null; // Render nothing while redirecting
  }

  return (
    <div>
      <h1>Bible Verse of the Day</h1>
      <p>“For I know the plans I have for you...” - Jeremiah 29:11</p>
      <QuoteWidget />
      <h2>Recent Articles</h2>
      {/* List recent articles or topics here */}
    </div>
  );
};

export default HomePage;
