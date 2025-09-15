import React, { useState, useRef } from 'react';
import axios from 'axios';

export default function AdminAddSong({ movieId }) {
  const [form, setForm] = useState({
    title: '',
    singer: '',
    songType: '',
    audioFile: null,
    coverImage: null,
  });
  const [message, setMessage] = useState('');

  // refs for file inputs
  const audioRef = useRef(null);
  const coverRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', form.title);
    data.append('singer', form.singer);
    data.append('songType', form.songType);
    data.append('audioFile', form.audioFile);
    data.append('coverImage', form.coverImage);

    try {
      await axios.post(`http://localhost:5671/api/movies/${movieId}/songs/add`, data);
      setMessage('Song added successfully!');

      // ✅ clear text fields in state
      setForm({
        title: '',
        singer: '',
        songType: '',
        audioFile: null,
        coverImage: null,
      });

      // ✅ also clear file input elements
      if (audioRef.current) audioRef.current.value = '';
      if (coverRef.current) coverRef.current.value = '';
    } catch (err) {
      console.error(err);
      setMessage('Failed to add song');
    }
  };

  return (
    <div>
      <h2>Add Song to Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Song Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          name="singer"
          placeholder="Singer"
          value={form.singer}
          onChange={handleChange}
          required
        />
        <input
          name="songType"
          placeholder="Song Type"
          value={form.songType}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="audioFile"
          accept="audio/*"
          onChange={handleChange}
          ref={audioRef} // ✅ ref
          required
        />
        <input
          type="file"
          name="coverImage"
          accept="image/*"
          onChange={handleChange}
          ref={coverRef} // ✅ ref
          required
        />
        <button type="submit">Add Song</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
