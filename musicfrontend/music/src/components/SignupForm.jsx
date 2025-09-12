import React, { useState } from 'react';
import axios from 'axios';

export default function SignupForm() {
  const [role, setRole] = useState('user');
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url =
        role === 'user'
          ? 'http://localhost:5671/api/auth/user/signup'
          : 'http://localhost:5671/api/auth/admin/signup';

      const res = await axios.post(url, form);
      console.log(res.data);
      setMessage('Signup successful!');
    } catch (err) {
      console.error(err);
      setMessage('Signup failed');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <label>
        Role:
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </label>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
