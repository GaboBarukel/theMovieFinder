import "./modesContainer.css";

import ModeCard from "./ModeCard";

let Modes = [{ title: "SEARCH" }, { title: "DISCOVER" }, { title: "STREAM" }];

const ModesContainer = () => {
  return (
    <div className="modesListContainer">
      {Modes.map((mode) => (
        <ModeCard title={mode.title} key={mode.title} />
      ))}
    </div>
  );
};

export default ModesContainer;
