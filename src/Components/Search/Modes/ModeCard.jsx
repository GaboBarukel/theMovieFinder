import { useState, useEffect } from "react";
import { useSearchContext } from "../../../Hooks/useSearchcontext";
import MovieItem from "../../List/MovieItem";

const apiKey = import.meta.env.VITE_API_KEY;
const URL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-419&`;

const ModeCard = ({ title }) => {
  const [searchedMovies, setSearchedMovies] = useState(null);
  const { onExpandMode, searchTerm, searchGeneral, selectedExpand } =
    useSearchContext();
  let classesExpand = "modeCard";

  useEffect(() => {
    const queryURL = URL + `query=${searchTerm}&page=1&include_adult=false`;
    fetch(queryURL)
      .then((res) => res.json())
      .then((data) => setSearchedMovies(data.results.slice(0, 3)));
  }, [searchTerm]);

  const updateExpand = () => {
    onExpandMode(title);
    searchGeneral && document.getElementById("searchInput").focus();
  };

  return (
    <div
      className={
        selectedExpand !== title
          ? classesExpand
          : (classesExpand += " expandedCard")
      }
      onClick={updateExpand}
    >
      {searchGeneral &&
        selectedExpand === title &&
        searchedMovies?.map((movie) => (
          <MovieItem movieData={movie} key={movie.id} />
        ))}
      <h3
        className={
          selectedExpand === title ? "modeTitle onSearchModeTitle" : "modeTitle"
        }
      >
        {title}
      </h3>
      {selectedExpand === title && searchTerm === "" && (
        <p className="modeExplanation">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio
          exercitationem, voluptatem repellat eum officiis reiciendis odio
          quidem doloribus porro! Nemo corrupti autem blanditiis unde ipsa
          itaque tempora commodi pariatur?
        </p>
      )}
    </div>
  );
};

export default ModeCard;
