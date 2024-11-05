// Pages/TopicsPage.js
import React from 'react';
import './TopicsPage.css';  // Import the CSS file

const TopicsPage = () => {
  return (
    <div className="topics-page">
      <h1>Bible Topics</h1>
      <ul className="topics-list">
        <li>
          <h3>Faith</h3>
          <p>In-depth articles about faith...</p>
        </li>
        <li>
          <h3>Love</h3>
          <p>In-depth articles about love...</p>
        </li>
        {/* Add more topics here */}
      </ul>
    </div>
  );
};

export default TopicsPage;
