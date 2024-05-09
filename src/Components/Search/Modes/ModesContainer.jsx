import { useState, useEffect } from "react";
import "./modesContainer.css";

//TODO: Loading Component
import { useSearchContext } from "../../../Hooks/useSearchcontext";
import Loading from "../../../UI/Loading";
import MovieItem from "../../List/MovieItem";
import ModeCard from "./ModeCard";

const apiKey = import.meta.env.VITE_API_KEY;
const URL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-419&`;

let Modes = [{ title: "SEARCH" }, { title: "DISCOVER" }, { title: "STREAM" }];

const ModesContainer = () => {
  const [searchedMovies, setSearchedMovies] = useState(null);
  const {searchTerm, searchGeneral, selectedExpand} = useSearchContext()

  useEffect(() => {
    const queryURL = URL + `query=${searchTerm}&page=1&include_adult=false`;
    fetch(queryURL)
      .then((res) => res.json())
      .then((data) => setSearchedMovies(data.results.slice(0, 3)));
  }, [searchTerm]);

  return (
    <div className="modesListContainer">
      {!searchGeneral
        ? Modes.map((mode) => (
            <ModeCard
              title={mode.title}
              key={mode.title}
              expandBoolean={selectedExpand === mode.title ? true : false}              
            />
          ))
        : searchedMovies?.map((movie) => (
            <MovieItem movieData={movie} key={movie.id} />
          ))}
    </div>
  );
};

export default ModesContainer;
