import { useState, createContext } from "react";

export const SearchContext = createContext();

const apiKey = import.meta.env.VITE_API_KEY;
// let URL = `https://api.themoviedb.org/3/search/`;

export function SearchContextProvider({ children }) {
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExpand, setSelectedExpand] = useState(null);
  const [searchURL, setSearchURL] = useState("");

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
      if (title === "MOVIES" || !title) {
        setSearchURL(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-419&`
        );
      } else if (title === "TV") {
        setSearchURL(
          `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=es-419&`
        );
      } else if (title === "PEOPLE") {
        setSearchURL(
          `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=es-419&`
        );
      }
    }
  };

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        onSearchQueryTerm,
        selectedExpand,
        onExpandMode,
        searchedMovies,
        setSearchedMovies,
        searchURL,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
