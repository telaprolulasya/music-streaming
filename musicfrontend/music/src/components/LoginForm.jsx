import React, { useState } from 'react';
import axios from 'axios';

export default function LoginForm() {
  const [role, setRole] = useState('user');
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url =
        role === 'user'
          ? 'http://localhost:7076/api/auth/user/login'
          : 'http://localhost:7076/api/auth/admin/login';

      const res = await axios.post(url, form);
      console.log(res.data);
      if (res.status === 200) {
        setMessage('Login successful!');
      } else {
        setMessage('Invalid credentials');
      }
    } catch (err) {
      console.error(err);
      setMessage('Login failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Role:
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </label>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
