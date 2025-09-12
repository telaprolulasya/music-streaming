import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function MovieSongs({ movie, onBack }) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5671/api/movies/${movie.id}/songs`)
      .then(res => setSongs(res.data))
      .catch(err => console.error(err));
  }, [movie]);

  return (
    <div>
      <button onClick={onBack}>← Back to Movies</button>
      <h2>{movie.name} Songs</h2>
      {songs.map(song => (
        <div key={song.id} style={{ marginBottom: '20px' }}>
          <img
            src={`data:image/jpeg;base64,${song.coverImage}`}
            alt={song.title}
            style={{ width: '150px', height: '150px' }}
          />
          <h4>{song.title} - {song.singer}</h4>
          <audio controls>
            <source src={`data:audio/mp3;base64,${song.audioFile}`} type="audio/mpeg" />
          </audio>
        </div>
      ))}
    </div>
  );
}
