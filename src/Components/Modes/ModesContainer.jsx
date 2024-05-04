import "./modesContainer.css";

//TODO: Loading Component
import Loading from "../../UI/Loading";
import MovieItem from "../List/MovieItem";
import Button from "../../UI/Button";

const ModesContainer = () => {
  return (
    <>
      <div className="modesListContainer">
        <div className="modeCard">
          <p className="modeTitle">SEARCH</p>
        </div>
        <div className="modeCard">
          <p className="modeTitle">DISCOVER</p>
        </div>
        <div className="modeCard">
          <p className="modeTitle">STREAM</p>
        </div>
      </div>
    </>
  );
};

export default ModesContainer;
