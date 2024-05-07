import { useState, useEffect } from "react";
import "./popularCarousel.css";

//TODO: Loading Component
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Loading from "../../UI/Loading";
import CarouselItem from "./CarouselItem";

const PopularCarousel = ({ popularMovies }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if(imageIndex === 9){
          setImageIndex(0)
      }else{
        setImageIndex(imageIndex + 1)
      }
    }, 3000)
    return () => clearTimeout(timer)
  },[imageIndex])

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
        <MdArrowForwardIos />
      </button>
    </div>
  );
};

export default PopularCarousel;
