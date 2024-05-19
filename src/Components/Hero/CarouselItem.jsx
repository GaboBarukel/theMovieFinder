import "./carouselItem.css";

const CarouselItem = ({ movie, index }) => {
  return (
    <div className="itemContainer" style={{ translate: `${-100 * index}%` }}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        className="carouselImg"
        alt={movie.title}
      />
      <span className="carouselMovieTitle">
        {movie.title ? movie.title : movie.name}
      </span>
    </div>
  );
};

export default CarouselItem;
