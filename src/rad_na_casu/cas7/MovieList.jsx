import React, { useState } from "react";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  function addMovie() {
    const movie = inputValue.trim();
    if (!movie) {
      setMessage("Please enter a movie");
      return;
    }
    if (movies.includes(movie)) {
      setMessage("This movie already exists");
    } else {
      setMovies([...movies, movie]);
      setMessage("");
      setInputValue("");
    }
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Movie name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>{message}</p>
      <button onClick={addMovie}>Add Movie</button>
      <ul>
        {movies.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
export default MovieList;
