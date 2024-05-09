import HeroSection from "./Components/Hero/HeroSection";
import SearchSection from "./Components/Search/SearchSection";
import { SearchContextProvider } from "./Context/searchContext";

function App() {
  return (
    <SearchContextProvider>
      <HeroSection />
      <SearchSection />
    </SearchContextProvider>
  );
}

export default App;
