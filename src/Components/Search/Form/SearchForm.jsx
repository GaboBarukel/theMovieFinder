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
    !selectedExpand && !searchGeneral && onExpandMode("MOVIES");
  };

  const searchHandler = (e) => {
    e.preventDefault();
    let input = document.getElementById("searchInput");
    const searchTerm = input.value;
    searchTerm !== "" && !selectedExpand && onExpandMode("MOVIES");
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
            <input
              className={
                !searchGeneral ? "searchInput" : "searchInput activeSearchInput"
              }
              id="searchInput"
              autoFocus
            />
          )}
          <IoSearchSharp
            className="searchIcon"
            onClick={!searchGeneral ? showInputHandler : searchHandler}
          />
        </form>
        {searchGeneral && (
          <IoCloseSharp className="closeIcon" onClick={showInputHandler} />
        )}
      </div>
    </div>
  );
};

export default SearchForm;
