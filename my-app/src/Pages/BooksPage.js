import React, { useState, useEffect } from 'react';

const BooksPage = () => {
  const [books, setBooks] = useState([]); // State to hold books
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to handle errors

  // useEffect to fetch books when the component mounts
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          'https://www.googleapis.com/books/v1/volumes?q=love&maxResults=10' // Fetch books on 'love' from Google Books API
        );
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        console.log(data); // Log the entire response to inspect the structure
        setBooks(data.items || []); // Check if 'items' exists in response
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error); // Log the error for debugging
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
      <h1>Free Books on Love (Google Books)</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
              {book.volumeInfo.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksPage;
