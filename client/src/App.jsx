import React from 'react'
import MovieCard from './components/MovieCard'
import Navbar from './components/Navbar'
import Filterbar from './components/pages/Filterbar'
import { useEffect, useState } from "react";


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/movies?search=Batman")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data.Search || []);
      });
  }, []);


  return (
    <>
    <Navbar/>
    <Filterbar/>
      
    <div>
      <h1>Movie Watchlist</h1>

    {movies.map((movie) => (
  <MovieCard key={movie.imdbID} movie={movie} />
))}
    </div>
    </>
  )
}

export default App

