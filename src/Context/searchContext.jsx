import { useState, createContext } from "react";

export const SearchContext = createContext();

export function SearchContextProvider({ children }) {
  const [searchGeneral, setSearch] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExpand, setSelectedExpand] = useState(null);

  const onSearchGeneralMode = () => {
    searchGeneral && setSearchTerm("");
    setSearch((prevSearch) => !prevSearch);
  };

  const onSearchQueryTerm = (queryTerm) => {
    setSearchTerm(queryTerm);
  };

  const onExpandMode = (title) => {
    if (selectedExpand === title) {
      setSearchedMovies(null);
      setSelectedExpand(null);
    } else {
      setSearchedMovies(null);
      setSelectedExpand(title);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        searchGeneral,
        onSearchGeneralMode,
        searchTerm,
        onSearchQueryTerm,
        selectedExpand,
        onExpandMode,
        searchedMovies,
        setSearchedMovies,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
