import { useState, useEffect } from "react";
import "./modesContainer.css";

//TODO: Loading Component
import Loading from "../../../UI/Loading";
import MovieItem from "../../List/MovieItem";
import ModeCard from "./ModeCard";

const apiKey = import.meta.env.VITE_API_KEY;
const URL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-419&`;

const ModesContainer = ({ onSearchTerm }) => {
  const [searchedMovies, setSearchedMovies] = useState(null);
  let showMode = true;

  useEffect(() => {
    const queryURL = URL + `query=${onSearchTerm}&page=1&include_adult=false`;
    fetch(queryURL)
      .then((res) => res.json())
      .then((data) => setSearchedMovies(data.results.slice(0, 3)));
  }, [onSearchTerm]);

  if (onSearchTerm !== "") {
    showMode = false;
  } else if (onSearchTerm === "") {
    showMode = true;
  }

  return (
    <div className="modesListContainer">
      {showMode ? (
        <>
          <ModeCard title="SEARCH" />
          <ModeCard title="DISCOVER" />
          <ModeCard title="STREAM" />
        </>
      ) : (
        searchedMovies.map((movie) => (
          <MovieItem movieData={movie} key={movie.id} />
        ))
      )}
    </div>
  );
};

export default ModesContainer;
