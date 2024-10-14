import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuoteWidget from '../components/QuoteWidget';

const HomePage = ({ user }) => {
  const navigate = useNavigate();
  const [verse, setVerse] = useState(''); // State to hold the Bible verse
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    if (!user) {
      navigate('/login'); // Redirect to login if not logged in
    }
  }, [user, navigate]);

  // useEffect to fetch a random Bible verse when the component mounts
  useEffect(() => {
    const fetchBibleVerse = async () => {
      try {
        const response = await fetch('https://bible-api.com/jeremiah+29:11'); // Fetch a specific verse
        if (!response.ok) {
          throw new Error('Failed to fetch verse');
        }
        const data = await response.json();
        setVerse(data.text); // Set the verse text to state
        setLoading(false);
      } catch (error) {
        console.error('Error fetching verse:', error); // Log the error for debugging
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBibleVerse();
  }, []); // Empty dependency array to run once when the component mounts

  if (!user) {
    return null; // Render nothing while redirecting
  }

  if (loading) {
    return <div>Loading Bible verse...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Bible Verse of the Day</h1>
      <p>“{verse}” - Jeremiah 29:11</p>
      <QuoteWidget />
      <h2>Recent Articles</h2>
      {/* List recent articles or topics here */}
    </div>
  );
};

export default HomePage;
