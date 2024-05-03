import { useState } from "react";

import PopularMovieList from "./Components/PopularMovieList";
import SearchedMoviesList from "./Components/SearchedMovieList";
import HeroSection from "./Components/HeroSection";
//import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(true);

  const showSearchHandler = (set) => {
    setShowSearch(set);
  };

  const searchTermPass = (search) => {
    setSearchTerm(search);
  };

  const onEmptyInputHandler = () => {
    setShowSearch(true);
  };

  return (
    <>
      <HeroSection
        onShow={showSearchHandler}
        onSearchPass={searchTermPass}
        onInput={onEmptyInputHandler}
      />
      {showSearch ? (
        <PopularMovieList />
      ) : (
        <SearchedMoviesList onSearchTerm={searchTerm} />
      )}
    </>
  );
}

export default App;
