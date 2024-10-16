import React, { useEffect, useState } from 'react';

const QuotesPage = () => {
  const [quote, setQuote] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'https://api.quotable.io/random'; // Updated quote API without CORS issue

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch the quote');
        }
        return response.json();
      })
      .then((data) => {
        setQuote(data.content);
      })
      .catch((error) => {
        console.error('Error fetching the quote:', error);
        setError('Failed to fetch the quote');
      });
  }, []);

  return (
    <div>
      <h1>Quote of the Day</h1>
      {error ? <p>{error}</p> : <p>{quote}</p>}
    </div>
  );
};

export default QuotesPage;
