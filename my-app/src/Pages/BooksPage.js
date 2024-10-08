// Pages/BooksPage.js
import React from 'react';

const BooksPage = () => {
  return (
    <div>
      <h1>Free PDF Books</h1>
      <ul>
        <li><a href="/path-to-book-1.pdf" download>Prayer and Worship</a></li>
        <li><a href="/path-to-book-2.pdf" download>Spiritual Growth</a></li>
        {/* Add more books here */}
      </ul>
    </div>
  );
};

export default BooksPage;
