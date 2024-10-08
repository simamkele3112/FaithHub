// Pages/HomePage.js
import React from 'react';
import QuoteWidget from '../components/QuoteWidget';

const HomePage = () => {
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
