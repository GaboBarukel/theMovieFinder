import { useState, useEffect } from "react";
import "./modesContainer.css";

//TODO: Loading Component
import Loading from "../../../UI/Loading";
import MovieItem from "../../List/MovieItem";
import ModeCard from "./ModeCard";

const apiKey = import.meta.env.VITE_API_KEY;
const URL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-419&`;

let Modes = [{ title: "SEARCH" }, { title: "DISCOVER" }, { title: "STREAM" }];

const ModesContainer = ({ onSearchTerm }) => {
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [selectedExpand, setSelectedExpand] = useState(null);
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

  const onExpandMode = (title) => {
    if (selectedExpand === title) {
      setSelectedExpand(null);
    } else {
      setSelectedExpand(title);
    }
  };

  return (
    <div className="modesListContainer">
      {showMode
        ? Modes.map((mode) => (
            <ModeCard
              title={mode.title}
              key={mode.title}
              expandBoolean={selectedExpand === mode.title ? true : false}
              onExpandMode={onExpandMode}
            />
          ))
        : searchedMovies.map((movie) => (
            <MovieItem movieData={movie} key={movie.id} />
          ))}
    </div>
  );
};

export default ModesContainer;
