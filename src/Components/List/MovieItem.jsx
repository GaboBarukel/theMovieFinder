import "./movieList.css";

const MovieItem = ({ movieData }) => {
  let imgSRC = "https://image.tmdb.org/t/p/w500" + movieData.backdrop_path;

  return (
    <div className="modeItemContainer">
      <img
        src={imgSRC}
        className="modePoster"
        alt={movieData.title ? movieData.title : movieData.name}
      />
      <span className="modeMovieTitle">
        {movieData.title ? movieData.title : movieData.name}
      </span>
    </div>
  );
};

export default MovieItem;
