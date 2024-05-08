import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

import "./searchForm.css";
import { useSearchContext } from "../../../Hooks/useSearchcontext";

const SearchForm = ({ onSearchPass }) => {
  const [activeInput, setActiveInput] = useState(false);
  const {searchGeneralMode} = useSearchContext()

  function showInputHandler() {
    setActiveInput(() => !activeInput);
    activeInput && onSearchPass("");
    searchGeneralMode();
  }

  const searchHandler = (e) => {
    e.preventDefault();
    const searchTerm = e.target[0].value;
    onSearchPass(searchTerm);
  };

  return (
    <div className="searchBackGradient">
      <div className="searchContainer">
        <form
          className={
            !activeInput
              ? "inputContainer"
              : "inputContainer activeInputContainer"
          }
          onSubmit={searchHandler}
        >
          {activeInput && <input className="searchInput" autoFocus />}
          <IoSearchSharp className="searchIcon" onClick={showInputHandler} />
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
