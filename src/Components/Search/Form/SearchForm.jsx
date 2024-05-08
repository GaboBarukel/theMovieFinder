import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useSearchContext } from "../../../Hooks/useSearchcontext";

import "./searchForm.css";

const SearchForm = () => {
  const [activeInput, setActiveInput] = useState(false);
  const {searchGeneralMode, searchQueryTerm} = useSearchContext()

  function showInputHandler() {
    setActiveInput(() => !activeInput);
    searchGeneralMode();
  }

  const searchHandler = (e) => {
    e.preventDefault();
    const searchTerm = e.target[0].value;
    searchQueryTerm(searchTerm);
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
