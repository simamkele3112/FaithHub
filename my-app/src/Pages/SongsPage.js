import React, { useState, useEffect } from 'react';

const SongsPage = () => {
  const [songs, setSongs] = useState([]);  // State to store songs
  const [loading, setLoading] = useState(true);  // State for loading status
  const [error, setError] = useState(null);  // State for handling errors

  // useEffect hook to fetch data from an API
  useEffect(() => {
    // Define the async function to fetch data
    const fetchSongs = async () => {
      try {
        const response = await fetch('https://itunes.apple.com/search?term=gospel&media=music&limit=5');
        const data = await response.json();
        setSongs(data.results);  // Update the songs state with the fetched data
        setLoading(false);  // Stop loading once data is fetched
      } catch (err) {
        setError('Failed to load songs');
        setLoading(false);
      }
    };

    fetchSongs();  // Call the fetch function
  }, []);  // Empty dependency array to run the effect only once

  // Handle loading state
  if (loading) {
    return <div>Loading songs...</div>;
  }

  // Handle error state
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Uplifting Spirit Songs</h1>
      <ul>
        {songs.map((song) => (
          <li key={song.trackId}>
            <a href={song.trackViewUrl} target="_blank" rel="noopener noreferrer">
              {song.trackName} by {song.artistName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongsPage;


