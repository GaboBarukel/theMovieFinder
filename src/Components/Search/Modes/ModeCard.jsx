import { useState } from "react";

const ModeCard = ({ title }) => {
  const [expandCard, setExpandCard] = useState(false);
  let classesExpand = "modeCard";

  const indivudualClickHandler = (e) => {
    setExpandCard((prevExp) => !prevExp);
    console.log(expandCard);
  };

  //TODO: you shouldn´t be abble to grow another card when one already is

  return (
    <div
      className={
        expandCard ? classesExpand : (classesExpand += " expandedCard")
      }
      onClick={indivudualClickHandler}
    >
      <p className="modeTitle">{title}</p>
    </div>
  );
};

export default ModeCard;
