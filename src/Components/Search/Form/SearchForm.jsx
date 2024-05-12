import { IoSearchSharp, IoCloseSharp } from "react-icons/io5";
import { useSearchContext } from "../../../Hooks/useSearchcontext";

import "./searchForm.css";

const SearchForm = () => {
  const {
    onSearchGeneralMode,
    onSearchQueryTerm,
    searchGeneral,
    onExpandMode,
    selectedExpand,
  } = useSearchContext();

  const showInputHandler = () => {
    onSearchGeneralMode();
    searchGeneral && onExpandMode(null);
    !selectedExpand && !searchGeneral && onExpandMode("SEARCH");
  };

  const searchHandler = (e) => {
    e.preventDefault();
    let input = document.getElementById("searchInput");
    const searchTerm = input.value;
    searchTerm !== "" && !selectedExpand && onExpandMode("SEARCH");
    onSearchQueryTerm(searchTerm);
    input.focus();
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
          id="searchForm"
          onSubmit={searchHandler}
        >
          {searchGeneral && (
            <input className="searchInput" id="searchInput" autoFocus />
          )}
          <IoSearchSharp
            className="searchIcon"
            onClick={!searchGeneral ? showInputHandler : searchHandler}
          />
          {searchGeneral && (
            <IoCloseSharp className="closeIcon" onClick={showInputHandler} />
          )}
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
