import { useState, useEffect } from "react"

//TODO: Loading Component
import Loading from './Loading'
import MovieItem from "./MovieItem"
import Button from "../UI/Button"

const apiKey = import.meta.env.VITE_API_KEY
const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es-419&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`

const PopularMovieList = () => {
    const [popularMovies, setPopularMovies] = useState(null);
    const [allMoviesDisplay, setAllMoviesDisplay] = useState(false);
  
    useEffect(() => {
      fetch(URL)
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))     
    }, []);
  
    const showAllHandler = () => {
      if (!allMoviesDisplay) {
        setAllMoviesDisplay(true);
      } else {
        setAllMoviesDisplay(false);
      }
    };
  
    return (
      <>
        <div className='titleContainer'>
          <h2 className='title'>PELÍCULAS POPULARES</h2>
          <Button onClick={showAllHandler}>VER MÁS</Button>
        </div>
        <div className='movieContainer'>
          {popularMovies ? (
            <ul className='list'>
              {(!allMoviesDisplay
                ? popularMovies.slice(0, 6)
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