import { useState, createContext } from "react";

export const SearchContext = createContext();

export function SearchContextProvider({ children }) {
  const [searchGeneral, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExpand, setSelectedExpand] = useState(null);

  const onSearchGeneralMode = () => {
    setSearch((prevSearch) => !prevSearch);
  };

  const onSearchQueryTerm = (queryTerm) => {
    setSearchTerm(queryTerm);
  };

  const onExpandMode = (title) => {
    if (selectedExpand === title) {
      setSelectedExpand(null);
    } else {
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
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
