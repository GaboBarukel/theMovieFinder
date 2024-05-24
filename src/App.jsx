import HeroSection from "./Components/Hero/HeroSection";
import ModesContainer from "./Components/Modes/ModesContainer";
// import SearchSection from "./Components/Search/SearchSection";
import { SearchContextProvider } from "./Context/searchContext";

function App() {
  return (
    <SearchContextProvider>
      <HeroSection />
      <ModesContainer />
    </SearchContextProvider>
  );
}

export default App;
