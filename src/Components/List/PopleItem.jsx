import "./peopleItem.css";
import MiniatureMovieItem from "./MiniatureMovieItem";

const PeopleItem = ({ peopleData }) => {
  let imgSRC = "https://image.tmdb.org/t/p/w500" + peopleData.profile_path;

  return (
    <div className="peopleItemContainer">
      <div className="peoplePosterContainer">
        <img src={imgSRC} className="peoplePoster" alt={peopleData.name} />
      </div>
      <div className="peopleContent">
        <h4 className="peopleName">{peopleData.name}</h4>
        <p className="peopleDepartment">
          Department:{" "}
          <span className="peopleDepartmentDescription">
            {peopleData.known_for_department}
          </span>
        </p>
        <div className="knownForContainer">
          <p className="knownForTitle">Known For:</p>
          {peopleData.known_for?.map(
            (movie) =>
              movie.backdrop_path && (
                <MiniatureMovieItem movieData={movie} key={movie.id} />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default PeopleItem;
