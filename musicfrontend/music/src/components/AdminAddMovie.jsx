import React, { useState } from 'react';
import axios from 'axios';

export default function AdminAddMovie({ onMovieAdded }) {
  const [name, setName] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', name);
    data.append('coverImage', coverImage);
    try {
      const res = await axios.post('http://localhost:5671/api/movies/add', data);
      setMessage('Movie added successfully!');
      onMovieAdded(res.data); // pass movie object with id back to parent
    } catch (err) {
      console.error(err);
      setMessage('Failed to add movie');
    }
  };

  return (
    <div>
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Movie Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setCoverImage(e.target.files[0])}
          required
        />
        <button type="submit">Add Movie</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
