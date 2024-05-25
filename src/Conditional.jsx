import React, { useState } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: 'Schindler\'s List', year: 1993 },
  ]);

  const [filterYear, setFilterYear] = useState('');

  const handleFilterChange = (event) => {
    setFilterYear(event.target.checked ? 2000 : '');
  };

  const filteredMovies = filterYear ? movies.filter(movie => movie.year > 2000) : movies;

  return (
    <div className="App">
      <h1>Movies List</h1>
      <label className="checkbox-label">
        <input type="checkbox" onChange={handleFilterChange} />
        Show movies released after 2000
      </label>
      <ul className="movie-list">
        {filteredMovies.map((movie, index) => (
          <li key={index} className="movie-item">
            <div className="movie-title">{movie.title}</div>
            <div className="movie-year">({movie.year})</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;