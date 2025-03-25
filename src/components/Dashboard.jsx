// src/components/Dashboard.jsx

import React, { useState } from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  // Sample movie data. In a real application, this might come from an API or global state.
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      director: 'Christopher Nolan',
      genre: 'Science Fiction',
      releaseYear: 2010,
      synopsis: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
      posterUrl: 'https://image.tmdb.org/t/p/original/xymM5aW6MDcH5AR9I3CamSegJd6.jpg',
    },
    {
      id: 2,
      title: 'The Matrix',
      director: 'The Wachowskis',
      genre: 'Action',
      releaseYear: 1999,
      synopsis: 'A computer hacker learns about the true nature of his reality and his role in the war against its controllers.',
      posterUrl: 'https://image.tmdb.org/t/p/original/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg',
    },
    // Add more movie objects as needed
  ]);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Movie Collection</h1>
        <Link to="/add-movie">
          <button className="add-movie-btn">Add Movie</button>
        </Link>
      </header>

      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
