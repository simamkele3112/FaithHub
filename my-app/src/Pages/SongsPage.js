import React, { useState, useEffect } from 'react';

const SongsPage = () => {
  const [songs, setSongs] = useState([]); // State to hold the list of songs
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  // useEffect to fetch song data when the component mounts
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        // Fetching songs from iTunes API using "uplifting" as the search term
        const response = await fetch('https://itunes.apple.com/search?term=uplifting&media=music&limit=10');
        if (!response.ok) {
          throw new Error('Failed to fetch songs');
        }
        const data = await response.json();
        setSongs(data.results); // 'data.results' contains the list of songs from iTunes
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchSongs();
  }, []); // Empty dependency array to run this only once when the component mounts

  // If the page is still loading, display a loading message
  if (loading) {
    return <div>Loading songs...</div>;
  }

  // If there is an error, display the error message
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render the list of songs once data has been successfully fetched
  return (
    <div>
      <h1>Uplifting Spirit Songs</h1>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
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
