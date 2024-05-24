import { useState, useEffect } from "react";
import PopularCarousel from "./PopularCarousel";
import SearchForm from "./Form/SearchForm";
import "./heroSection.css";

const apiKey = import.meta.env.VITE_API_KEY;
const URL = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=es-419&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

const HeroSection = () => {
  const [popularMovies, setPopularMovies] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results.slice(0, 10)));
  }, []);

  return (
    <>
      <div className="heroContainer">
        <div className="titlaSearchContainer">
          <h1 className="title">MOVIE FINDER</h1>
          <SearchForm />
        </div>
        <PopularCarousel popularMovies={popularMovies} />
      </div>
    </>
  );
};

export default HeroSection;
