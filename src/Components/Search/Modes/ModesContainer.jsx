import { useEffect } from "react";
import { useSearchContext } from "../../../Hooks/useSearchcontext";

import "./modesContainer.css";
import ModeCard from "./ModeCard";

let Modes = [{ title: "SEARCH" }, { title: "DISCOVER" }, { title: "STREAM" }];

const apiKey = import.meta.env.VITE_API_KEY;
const URL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-419&`;

const ModesContainer = () => {
  const { searchTerm, searchGeneral, setSearchedMovies, searchedMovies } =
    useSearchContext();

  useEffect(() => {
    const queryURL = URL + `query=${searchTerm}&page=1&include_adult=false`;
    fetch(queryURL)
      .then((res) => res.json())
      .then((data) => setSearchedMovies(data.results.slice(0, 3)));
  }, [searchTerm]);

  return (
    <div className="modesListContainer">
      {Modes.map((mode) => (
        <ModeCard
          title={mode.title}
          key={mode.title}
          searchedMovies={searchedMovies}
        />
      ))}
    </div>
  );
};

export default ModesContainer;
