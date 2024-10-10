import React, { useState, useEffect } from 'react';

const BooksPage = () => {
  const [books, setBooks] = useState([]); // State to hold books
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to handle errors

  // useEffect to fetch books when the component mounts
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://openlibrary.org/subjects/love.json?limit=10'); // Fetches books on 'love' topic
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        setBooks(data.works); // Open Library API returns a "works" array
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []); // Empty dependency array to run once when the component mounts

  if (loading) {
    return <div>Loading books...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Free Books on Love (Open Library)</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <a href={`https://openlibrary.org${book.key}`} target="_blank" rel="noopener noreferrer">
              {book.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksPage;
