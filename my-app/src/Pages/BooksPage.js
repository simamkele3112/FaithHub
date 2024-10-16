import React, { useState, useEffect } from 'react';

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://openlibrary.org/search.json?q=love&limit=10');
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        setBooks(data.docs);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <div>Loading books...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Free Books on Love (Open Library)</h1>
      <ul>
        {books.map((book) => (
          <li key={book.key}>
            <a href={`https://openlibrary.org${book.key}`} target="_blank" rel="noopener noreferrer">
              {book.title} by {book.author_name?.join(', ') || 'Unknown Author'}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksPage;

