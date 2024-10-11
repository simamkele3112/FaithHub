// Pages/SongsPage.js
import React, { useState, useEffect } from 'react';

const SongsPage = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch songs from the iTunes API
    fetch('https://itunes.apple.com/search?term=spiritual+uplifting&media=music&limit=10')
      .then(response => response.json())
      .then(data => {
        setSongs(data.results);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch songs');
        setLoading(false);
      });
  }, []); // Empty array means this effect runs once on component mount

  if (loading) {
    return <div>Loading songs...</div>;
  }

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

