import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

import "./searchForm.css";

const SearchForm = () => {
  const [activeInput, setActiveInput] = useState(false);

  function showInputHandler() {
    setActiveInput(() => !activeInput);
  }

  return (
    <div className="searchBackGradient">
      <div className="searchContainer">
        <div
          className={
            !activeInput
              ? "inputContainer"
              : "inputContainer activeInputContainer"
          }
        >
          {activeInput && <input className="searchInput" autoFocus />}
          <IoSearchSharp className="searchIcon" onClick={showInputHandler} />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
