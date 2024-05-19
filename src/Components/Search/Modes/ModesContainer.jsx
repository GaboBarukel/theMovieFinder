import { useEffect } from "react";
import { useSearchContext } from "../../../Hooks/useSearchcontext";

import "./modesContainer.css";
import ModeCard from "./ModeCard";

let Modes = [{ title: "MOVIES" }, { title: "TV" }, { title: "PEOPLE" }];

const ModesContainer = () => {
  const { searchTerm, setSearchedMovies, searchedMovies, searchURL } =
    useSearchContext();

  useEffect(() => {
    let queryURL = searchURL + `query=${searchTerm}&page=1&include_adult=false`;
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
