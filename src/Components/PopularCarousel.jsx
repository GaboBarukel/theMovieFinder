import { useState } from "react";
import "./popularCarousel.css";

//TODO: Loading Component
import Loading from "./Loading";
import CarouselItem from "./CarouselItem";

const PopularCarousel = ({ popularMovies }) => {
  const [imageIndex, setImageIndex] = useState(0);

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) {
        return 0;
      } else {
        return index - 1;
      }
    });
  }

  function showNextImage() {
    setImageIndex((index) => {
      if (index === popularMovies.length - 1) {
        return popularMovies.length - 1;
      } else {
        return index + 1;
      }
    });
  }

  return (
    <div className="carousel-img-container">
      <button
        onClick={showPrevImage}
        className="slider-btn left-btn"
        style={
          imageIndex === 0 ? { display: "none" } : { display: "inline-block" }
        }
      >
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
        popularMovies.map((movie) => (
          <CarouselItem key={movie.id} movie={movie} index={imageIndex} />
        ))
      ) : (
        <Loading />
      )}
      <button
        onClick={showNextImage}
        className="slider-btn right-btn"
        style={
          imageIndex === popularMovies?.length - 1
            ? { display: "none" }
            : { display: "inline-block" }
        }
      >
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
    </div>
  );
};

export default PopularCarousel;
