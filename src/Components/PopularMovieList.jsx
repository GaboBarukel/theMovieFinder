import { useState, useEffect } from "react";
import "./List/movieList.css";

//TODO: Loading Component
import Loading from "../UI/Loading";
import MovieItem from "./List/MovieItem";
import Button from "../UI/Button";

const apiKey = import.meta.env.VITE_API_KEY;
const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es-419&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
let buttonText = "show more";

const PopularMovieList = () => {
  const [popularMovies, setPopularMovies] = useState(null);
  const [allMoviesDisplay, setAllMoviesDisplay] = useState(false);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  const showAllHandler = () => {
    if (!allMoviesDisplay) {
      buttonText = "show less";
      setAllMoviesDisplay(true);
    } else {
      buttonText = "show more";
      setAllMoviesDisplay(false);
    }
  };

  return (
    <>
      <div className="movieListContainer">
        {popularMovies ? (
          <ul className="list">
            {(!allMoviesDisplay
              ? popularMovies.slice(0, 3)
              : popularMovies
            ).map((movie) => (
              <MovieItem movieData={movie} key={movie.id} />
            ))}
          </ul>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default PopularMovieList;
