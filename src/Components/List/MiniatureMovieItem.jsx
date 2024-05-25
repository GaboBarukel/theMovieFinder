import "./miniatureMovieItem.css";

const MiniatureMovieItem = ({ movieData }) => {
  let imgSRC = "https://image.tmdb.org/t/p/w500" + movieData.backdrop_path;

  return (
    <div className="miniatureContainer">
      <img src={imgSRC} className="miniaturePoster" alt={movieData.title} />
      <span className="miniatureMovieTitle">{movieData.title}</span>
    </div>
  );
};

export default MiniatureMovieItem;
