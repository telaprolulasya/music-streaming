import React, { useState } from 'react';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import './App.css';

export default function App() {
  const [view, setView] = useState(null); // 'signup' or 'login'

  return (
    <div>
      <header className="header">
        <div className="right-buttons">
          <button onClick={() => setView('login')}>Login</button>
          <button onClick={() => setView('signup')}>Sign Up</button>
        </div>
      </header>

      <main>
        {view === 'signup' && <SignupForm />}
        {view === 'login' && <LoginForm />}
      </main>
    </div>
  );
}
