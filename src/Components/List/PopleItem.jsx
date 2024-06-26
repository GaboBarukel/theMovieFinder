import "./peopleItem.css";
import { FaUserLarge } from "react-icons/fa6";

const PeopleItem = ({ peopleData }) => {
  let imgSRC = "https://image.tmdb.org/t/p/w500" + peopleData.profile_path;

  return (
    <div className="peopleItemContainer" key={peopleData.id}>
      <div className="peoplePosterContainer">
        {peopleData.profile_path ? (
          <img src={imgSRC} className="peoplePoster" alt={peopleData.name} />
        ) : (
          <div className="noImage">
            <FaUserLarge />
          </div>
        )}
      </div>
      <div className="peopleContent">
        <h4 className="peopleName">{peopleData.name}</h4>
        <p className="peopleDepartment">
          Department:{" "}
          <span className="peopleDepartmentDescription">
            {peopleData.known_for_department}
          </span>
        </p>
        <p className="knownForTitle">Known For:</p>
        <div className="knownForContainer">
          {peopleData.known_for?.map((movie) =>
            movie.title ? (
              <span className="movieSpan" key={movie.id}>
                {movie.title}
              </span>
            ) : (
              <span className="movieSpan">x</span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default PeopleItem;
