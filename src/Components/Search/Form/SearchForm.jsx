import { IoSearchSharp } from "react-icons/io5";
import { useSearchContext } from "../../../Hooks/useSearchcontext";

import "./searchForm.css";

const SearchForm = () => {
  const {
    onSearchGeneralMode,
    onSearchQueryTerm,
    searchGeneral,
    onExpandMode,
  } = useSearchContext();

  function showInputHandler() {
    onSearchGeneralMode();
    searchGeneral && onExpandMode(null);
  }

  const searchHandler = (e) => {
    e.preventDefault();
    const searchTerm = e.target[0].value;
    onSearchQueryTerm(searchTerm);
  };

  return (
    <div className="searchBackGradient">
      <div className="searchContainer">
        <form
          className={
            !searchGeneral
              ? "inputContainer"
              : "inputContainer activeInputContainer"
          }
          onSubmit={searchHandler}
        >
          {searchGeneral && <input className="searchInput" autoFocus />}
          <IoSearchSharp className="searchIcon" onClick={showInputHandler} />
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
