import { useState, createContext } from "react";

export const SearchContext = createContext();

const apiKey = import.meta.env.VITE_API_KEY;
// let URL = `https://api.themoviedb.org/3/search/`;

export function SearchContextProvider({ children }) {
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExpand, setSelectedExpand] = useState("MOVIES");
  const [searchURL, setSearchURL] = useState("");

  const onSearchQueryTerm = (queryTerm) => {
    setSearchTerm(queryTerm);
  };

  const onExpandMode = (title) => {
    if (selectedExpand === title) {
      setSearchedMovies(null); // --> revisar
      // setSelectedExpand(null);
    } else {
      setSearchedMovies(null);
      moveModeIndicator(title);
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

  const moveModeIndicator = (nextButton) => {
    const buttonContainer = document.querySelector(".modesButtonContainer");
    const oldActiveButton = document.querySelector(".modeButtonActive");
    const nextActiveButton = document.querySelector(`.${nextButton}`);
    const newButtonPosition =
      oldActiveButton.compareDocumentPosition(nextActiveButton);
    let transitionWidth;

    const nextButtonWidth =
      nextActiveButton.offsetWidth / buttonContainer.offsetWidth;

    if (newButtonPosition === 4) {
      transitionWidth =
        nextActiveButton.offsetLeft +
        nextActiveButton.offsetWidth -
        oldActiveButton.offsetLeft;
    } else {
      transitionWidth =
        oldActiveButton.offsetLeft +
        oldActiveButton.offsetWidth -
        nextActiveButton.offsetLeft;
      buttonContainer.style.setProperty(
        "--_left",
        nextActiveButton.offsetLeft + "px"
      );
    }

    buttonContainer.style.setProperty(
      "--_width",
      transitionWidth / buttonContainer.offsetWidth
    );

    setTimeout(() => {
      buttonContainer.style.setProperty(
        "--_left",
        nextActiveButton.offsetLeft + "px"
      );
      buttonContainer.style.setProperty("--_width", nextButtonWidth);
    }, 280);
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
