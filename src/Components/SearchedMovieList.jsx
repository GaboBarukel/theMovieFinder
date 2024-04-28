import { useState, useEffect } from "react";

//TODO: Loading component
import Loading from "./Loading";
import MovieItem from "./MovieItem";
import Button from "../UI/Button";

const apiKey = import.meta.env.VITE_API_KEY;
const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-419`;

const SearchedMoviesList = ({ onSearchTerm }) => {
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [allMoviesDisplay, setAllMoviesDisplay] = useState(false);

  //TODO: change axios to fetch and set the allMOviesDisplay handler
  useEffect(() => {
    const queryTerm = onSearchTerm;

    fetch(searchURL + `&query=${queryTerm}&page=1&include_adult=false`)
      .then((res) => res.json())
      .then((data) => setSearchedMovies(data.results));
  }, [onSearchTerm]);

  const showAllHandler = () => {
    if (!allMoviesDisplay) {
      setAllMoviesDisplay(true);
    } else {
      setAllMoviesDisplay(false);
    }
  };

  return (
    <>
      <div className="titleContainer">
        <h2 className="title">Search Results</h2>
        <Button onClick={showAllHandler}>VER MÁS</Button>
      </div>
      <div className="movieListContainer">
        {searchedMovies ? (
          <ul className="list">
            {(!allMoviesDisplay
              ? searchedMovies.slice(0, 6)
              : searchedMovies
            ).map(
              (movie) =>
                movie.poster_path && (
                  <MovieItem movieData={movie} key={movie.id} />
                )
            )}
          </ul>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default SearchedMoviesList;
