import { useState } from "react";

import HeroSection from "./Components/Hero/HeroSection";
import SearchForm from "./Components/Search/SearchForm";
import ModesContainer from "./Components/Modes/ModesContainer";

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
      <ModesContainer />
    </>
  );
}

export default App;
