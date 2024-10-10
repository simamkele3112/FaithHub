import React, { useEffect, useState } from 'react';

const QuotesPage = () => {
  const [quote, setQuote] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'https://cors-anywhere.herokuapp.com/https://quotes.rest/qod?language=en';

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setQuote(data.contents.quotes[0].quote);
      })
      .catch(error => {
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