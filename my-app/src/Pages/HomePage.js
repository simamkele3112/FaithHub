// Pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuoteWidget from '../components/QuoteWidget';

const HomePage = ({ user }) => {
  const navigate = useNavigate();
  const [verse, setVerse] = useState(null); // State to store the Bible verse
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    if (!user) {
      navigate('/login'); // Redirect to login if not logged in
    }
  }, [user, navigate]);

  useEffect(() => {
    // Fetch Bible verse dynamically from an API
    const fetchVerse = async () => {
      try {
        const response = await fetch('https://beta.ourmanna.com/api/v1/get/?format=json'); // Fetches a random verse
        if (!response.ok) {
          throw new Error('Failed to fetch Bible verse');
        }
        const data = await response.json();
        setVerse(data.verse.details.text); // Update state with verse text
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchVerse();
  }, []); // Run only on initial render

  if (!user) {
    return null; // Render nothing while redirecting
  }

  if (loading) {
    return <div>Loading verse of the day...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Bible Verse of the Day</h1>
      <p>{verse}</p> {/* Render the fetched Bible verse */}
      <QuoteWidget />
      <h2>Recent Articles</h2>
      {/* List recent articles or topics here */}
    </div>
  );
};

export default HomePage;
