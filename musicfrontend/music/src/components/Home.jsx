import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // CSS file for styling

export default function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="logo">VibeNet</div>
        <div className="auth-buttons">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
        </div>
      </header>

      <main className="home-main">
        <h1>Welcome to VibeNet</h1>
        <p>Your one-stop music & movies platform</p>
      </main>
    </div>
  );
}
