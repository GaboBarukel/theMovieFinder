import { useState, useEffect } from "react";
import "./modesContainer.css";

//TODO: Loading Component
import Loading from "../../../UI/Loading";
import MovieItem from "../../List/MovieItem";
import Button from "../../../UI/Button";

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
    <>
      <div className="modesListContainer">
        {showMode ? (
          <>
            <div className="modeCard">
              <p className="modeTitle">SEARCH</p>
            </div>
            <div className="modeCard">
              <p className="modeTitle">DISCOVER</p>
            </div>
            <div className="modeCard">
              <p className="modeTitle">STREAM</p>
            </div>
          </>
        ) : (
          searchedMovies.map((movie) => (
            <MovieItem movieData={movie} key={movie.id} />
          ))
        )}
      </div>
    </>
  );
};

export default ModesContainer;
