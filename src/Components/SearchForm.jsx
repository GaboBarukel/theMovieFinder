import { useState, useEffect } from "react";
import PopularCarousel from "./PopularCarousel";
import "./searchForm.css";

const apiKey = import.meta.env.VITE_API_KEY;
const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es-419&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

const SearchForm = (props) => {
  const [popularMovies, setPopularMovies] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results.slice(0, 6)));
  }, []);

  // const searchHandler = (e) => {
  //   e.preventDefault();
  //   const searchTerm = e.target[0].value;
  //   props.onSearchPass(searchTerm);
  //   props.onShow(false);
  //   // e.target[0].value = "";
  // };

  // const onChangeHandler = (e) => {
  //   if (e.target.value === "") {
  //     props.onInput();
  //   }
  // };

  return (
    <div className="formDiv">
      <h1 className="title">Movie Finder</h1>
      {/* <form onSubmit={searchHandler}>
        <input
          id="searchInput"
          placeholder="Search"
          onChange={onChangeHandler}
        />
      </form> */}
      <PopularCarousel popularMovies={popularMovies} />
    </div>
  );
};

export default SearchForm;
