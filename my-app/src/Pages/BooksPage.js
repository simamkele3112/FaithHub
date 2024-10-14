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
          'https://openlibrary.org/search.json?q=love&limit=10' // Fetch books with the search term 'love' from Open Library
        );
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        if (data.docs) {
          setBooks(data.docs); // Check if 'docs' (the books list) exists and set the books state
        } else {
          setError('No books found'); // Handle case where no books are returned
        }
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
      <h1>Free Books on Love (Open Library)</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <a
              href={`https://openlibrary.org${book.key}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {book.title} by {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksPage;

