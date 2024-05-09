import { useSearchContext } from "../../../Hooks/useSearchcontext";


const ModeCard = ({ title, expandBoolean }) => {
  const {onExpandMode} = useSearchContext()
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
