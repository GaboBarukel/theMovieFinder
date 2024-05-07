const ModeCard = ({ title, expandBoolean, onExpandMode }) => {
  let classesExpand = "modeCard";

  const updateExpand = () => {
    onExpandMode(title);
  };

  return (
    <div
      className={
        !expandBoolean ? classesExpand : (classesExpand += " expandedCard")
      }
      onClick={updateExpand}
    >
      <p className="modeTitle">{title}</p>
    </div>
  );
};

export default ModeCard;
