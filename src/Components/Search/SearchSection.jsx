import { useState } from "react";

import ModesContainer from "./Modes/ModesContainer";
import SearchForm from "./Form/SearchForm";

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchTermPass = (search) => {
    setSearchTerm(search);
  };

  return (
    <>
      <SearchForm onSearchPass={searchTermPass} />
      <ModesContainer onSearchTerm={searchTerm} />
    </>
  );
};

export default SearchSection;
