import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

import "./searchForm.css";

const SearchForm = ({ onSearchPass }) => {
  const [activeInput, setActiveInput] = useState(false);

  function showInputHandler() {
    setActiveInput(() => !activeInput);
    activeInput && onSearchPass("");
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
