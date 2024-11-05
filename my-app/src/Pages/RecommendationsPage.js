// Pages/RecommendationsPage.js
import React from 'react';
import './RecommendationsPage.css';  // Import the CSS file

const RecommendationsPage = () => {
  return (
    <div className="recommendations-page">
      <h1>Recommended Resources</h1>
      <ul className="recommendations-list">
        <li>Book: The Purpose Driven Life</li>
        <li>Podcast: The Bible for Normal People</li>
        {/* Add more recommendations here */}
      </ul>
    </div>
  );
};

export default RecommendationsPage;
