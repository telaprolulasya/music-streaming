import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import AdminAddMovie from './components/AdminAddMovie';
import AdminAddSong from './components/AdminAddSong';
import MovieList from './components/MovieList';
import MovieSongs from './components/MovieSongs';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState('');
  const [movie, setMovie] = useState(null); // selected movie for admin add
  const [selectedMovie, setSelectedMovie] = useState(null); // selected movie for user view

  const handleLoginSuccess = (userRole) => {
    setRole(userRole);
    setLoggedIn(true);
  };

  return (
    <div>
      {!loggedIn ? (
        <>
          <LoginForm onLoginSuccess={handleLoginSuccess} />
          <SignupForm />
        </>
      ) : (
        <>
          {role === 'admin' ? (
            <>
              {!movie ? (
                <AdminAddMovie onMovieAdded={setMovie} />
              ) : (
                <AdminAddSong movieId={movie.id} />
              )}
            </>
          ) : (
            <>
              {!selectedMovie ? (
                <MovieList onMovieClick={setSelectedMovie} />
              ) : (
                <MovieSongs movie={selectedMovie} onBack={() => setSelectedMovie(null)} />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
