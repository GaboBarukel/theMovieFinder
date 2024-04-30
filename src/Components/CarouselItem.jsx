import "./carouselItem.css";

const CarouselItem = ({ movie, index }) => {
  return (
    <div className="item-container" style={{ translate: `${-100 * index}%` }}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="carousel-img"
      />
    </div>
  );
};

export default CarouselItem;
