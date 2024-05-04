import { useState } from "react";

import SearchedMoviesList from "./Components/List/SearchedMovieList";
import HeroSection from "./Components/Hero/HeroSection";
import PopularMovieList from "./Components/PopularMovieList";
import SearchForm from "./Components/Search/SearchForm";
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
      <SearchForm />
      <PopularMovieList />
    </>
  );
}

export default App;
