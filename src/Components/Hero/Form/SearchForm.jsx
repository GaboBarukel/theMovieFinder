import { IoSearchSharp } from "react-icons/io5";
import { useSearchContext } from "../../../Hooks/useSearchcontext";

import "./searchForm.css";

const SearchForm = () => {
  const { onSearchQueryTerm, onExpandMode, selectedExpand } =
    useSearchContext();

  const searchHandler = (e) => {
    e.preventDefault();
    let input = document.getElementById("searchInput");
    const searchTerm = input.value;
    searchTerm !== "" && !selectedExpand && onExpandMode("MOVIES");
    onSearchQueryTerm(searchTerm);
    input.focus();
  };

  return (
    <form className="inputContainer" id="searchForm" onSubmit={searchHandler}>
      <input className="searchInput" id="searchInput" autoFocus />
      <IoSearchSharp className="searchIcon" onClick={searchHandler} />
    </form>
  );
};

export default SearchForm;
