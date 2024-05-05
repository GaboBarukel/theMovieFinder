import "./movieList.css";

const MovieItem = ({ movieData }) => {
  const imgSRC = `https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`;

  return (
    <div className="itemContainer">
      <img src={imgSRC} className="poster" alt={movieData.title} />
      <span className="carouselMovieTitle">{movieData.title}</span>
    </div>
  );
};

export default MovieItem;
