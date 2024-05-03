import { useState } from "react";

const MovieItem = ({ movieData }) => {
  const [showExtraInfo, setShowExtraInfo] = useState(false);

  const extraInfoHandler = () => {
    if (!showExtraInfo) {
      setShowExtraInfo(true);
    } else {
      setShowExtraInfo(false);
    }
  };

  const imgSRC = `https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`;

  return (
    <li className="item">
      <div
        key={movieData.id}
        className={showExtraInfo ? "itemContainerExtraInfo" : "itemContainer"}
      >
        <img
          src={imgSRC}
          alt="Poster original de la película"
          className={!showExtraInfo ? "poster" : "extraInfoPoster"}
          onClick={extraInfoHandler}
        />
        {showExtraInfo && (
          <div className={showExtraInfo ? "extraInfoShown" : "extraInfoHide"}>
            <h3 className="extraInfoTitle">{movieData.title}</h3>
            <p className="extraInfoText">{movieData.overview}</p>
          </div>
        )}
      </div>
    </li>
  );
};

export default MovieItem;
