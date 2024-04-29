import { useState } from "react";
import "./popularCarousel.css";

//TODO: Loading Component
import Loading from "./Loading";

// const apiKey = import.meta.env.VITE_API_KEY;
// const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es-419&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

const PopularCarousel = ({ popularMovies }) => {
  //   const [popularMovies, setPopularMovies] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  //   useEffect(() => {
  //     fetch(URL)
  //       .then((res) => res.json())
  //       .then((data) => setPopularMovies(data.results.slice(0, 6)));
  //   }, []);

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) {
        return popularMovies.length - 1;
      } else {
        return index - 1;
      }
    });
  }

  function showNextImage() {
    setImageIndex((index) => {
      if (index === popularMovies.length - 1) {
        return 0;
      } else {
        return index + 1;
      }
    });
  }

  return (
    <div className="carousel-img-container">
      <button onClick={showPrevImage} className="slider-btn left-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke="#2c3e50"
          fill="none"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M11 17h6l-4 -5l4 -5h-6l-4 5z" />
        </svg>
      </button>
      {popularMovies ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${
            popularMovies[
              imageIndex === 0 ? popularMovies.length - 1 : imageIndex - 1
            ].poster_path
          }`}
          className="carousel-img-bf"
        />
      ) : (
        <Loading />
      )}
      {popularMovies ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${popularMovies[imageIndex].poster_path}`}
          className="carousel-img"
        />
      ) : (
        <Loading />
      )}

      <button onClick={showNextImage} className="slider-btn right-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke="#2c3e50"
          fill="none"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M13 7h-6l4 5l-4 5h6l4 -5z" />
        </svg>
      </button>
      {popularMovies ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${
            popularMovies[
              imageIndex === popularMovies.length - 1 ? 0 : imageIndex + 1
            ].poster_path
          }`}
          className="carousel-img-af"
        />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default PopularCarousel;
