import React, { useState, useEffect } from 'react';
import './SongsPage.css';

const SongsPage = () => {
  const [songs, setSongs] = useState([]); // State to store songs
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for handling errors

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch('https://itunes.apple.com/search?term=christian&media=music&limit=10');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setSongs(data.results); // Update the songs state with the fetched data
        setLoading(false); // Stop loading once data is fetched
      } catch (err) {
        setError('Failed to load songs');
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  if (loading) {
    return <div className="songs-page-container">Loading songs...</div>;
  }

  if (error) {
    return <div className="songs-page-container">{error}</div>;
  }

  return (
    <div className="songs-page-container">
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
