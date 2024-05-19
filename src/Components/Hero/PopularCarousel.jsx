import { useState, useEffect } from "react";
import "./popularCarousel.css";

//TODO: Loading Component
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Loading from "../../UI/Loading";
import CarouselItem from "./CarouselItem";

const PopularCarousel = ({ popularMovies }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [onHover, setOnHover] = useState(false);

  let gotBackdrop = [];
  popularMovies?.map((movie) => {
    movie.backdrop_path && gotBackdrop.push(movie);
  });

  useEffect(() => {
    if (!onHover) {
      const timer = setTimeout(() => {
        if (imageIndex === gotBackdrop.length - 1) {
          setImageIndex(0);
        } else {
          setImageIndex(imageIndex + 1);
        }
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [imageIndex, onHover]);

  const onHoverCarouselHandler = () => {
    setOnHover((prevHov) => !prevHov);
  };

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
      if (index === gotBackdrop.length - 1) {
        return gotBackdrop.length - 1;
      } else {
        return index + 1;
      }
    });
  }

  return (
    <div
      className="carousel-img-container"
      onMouseEnter={onHoverCarouselHandler}
      onMouseLeave={onHoverCarouselHandler}
    >
      <div className="carousel-gradient"></div>
      <button
        onClick={showPrevImage}
        className="slider-btn left-btn"
        style={
          imageIndex === 0 ? { display: "none" } : { display: "inline-block" }
        }
      >
        <MdArrowBackIosNew />
      </button>
      {gotBackdrop ? (
        gotBackdrop.map(
          (movie) =>
            movie.backdrop_path && (
              <CarouselItem key={movie.id} movie={movie} index={imageIndex} />
            )
        )
      ) : (
        <Loading />
      )}
      <button
        onClick={showNextImage}
        className="slider-btn right-btn"
        style={
          imageIndex === gotBackdrop?.length - 1
            ? { display: "none" }
            : { display: "inline-block" }
        }
      >
        <MdArrowForwardIos />
      </button>
    </div>
  );
};

export default PopularCarousel;
