import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function MovieList({ onMovieClick }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5671/api/movies')
      .then(res => setMovies(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Available Movies</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.map(movie => (
          <div
            key={movie.id}
            style={{ margin: '10px', cursor: 'pointer' }}
            onClick={() => onMovieClick(movie)}
          >
            <img
              src={`data:image/jpeg;base64,${movie.coverImage}`}
              alt={movie.name}
              style={{ width: '150px', height: '200px', objectFit: 'cover' }}
            />
            <h4 style={{ textAlign: 'center' }}>{movie.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
