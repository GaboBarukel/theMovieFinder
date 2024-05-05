import { useState } from "react";

import ModesContainer from "./Modes/ModesContainer";
import SearchForm from "./Form/SearchForm";

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(true);

  const searchTermPass = (search) => {
    setSearchTerm(search);
  };

  const onEmptyInputHandler = () => {
    setShowSearch(true);
  };

  return (
    <>
      <SearchForm onSearchPass={searchTermPass} onInput={onEmptyInputHandler} />
      <ModesContainer onSearchTerm={searchTerm} />
    </>
  );
};

export default SearchSection;
