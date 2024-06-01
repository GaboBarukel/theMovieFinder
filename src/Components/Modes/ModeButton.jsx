import { useSearchContext } from "../../Hooks/useSearchcontext";
import "./modeButton.css";

const ModeButton = ({ title }) => {
  const { onExpandMode, selectedExpand } = useSearchContext();

  function modeButtonHanlder() {
    onExpandMode(title);
    document.getElementById("searchInput").focus();
  }

  return (
    <button
      className={
        selectedExpand !== title
          ? `modeButton ${title}`
          : `modeButton ${title} modeButtonActive`
      }
      onClick={modeButtonHanlder}
    >
      {title}
    </button>
  );
};

export default ModeButton;
