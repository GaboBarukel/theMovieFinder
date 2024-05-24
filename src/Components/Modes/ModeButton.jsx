import { useSearchContext } from "../../Hooks/useSearchcontext";
import "./modeButton.css";

const ModeButton = ({ title }) => {
  const { onExpandMode, searchGeneral, selectedExpand } = useSearchContext();

  function modeButtonHanlder() {
    onExpandMode(title);
    document.getElementById("searchInput").focus();
  }

  return (
    <button
      className={
        selectedExpand !== title ? "modeButton" : "modeButton modeButtonActive"
      }
      onClick={modeButtonHanlder}
    >
      {title}
    </button>
  );
};

export default ModeButton;
