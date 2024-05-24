import { useSearchContext } from "../../Hooks/useSearchcontext";
import MovieItem from "../List/MovieItem";

const ModeCard = ({ title, searchedMovies }) => {
  const {
    onExpandMode,
    searchTerm,
    searchGeneral,
    selectedExpand,
    onSearchQueryTerm,
  } = useSearchContext();
  let classesExpand = "modeCard";

  const updateExpand = () => {
    onSearchQueryTerm("");
    onExpandMode(title);
    document.getElementById("searchInput").focus();
  };

  return (
    <div
      className={
        selectedExpand !== title
          ? classesExpand
          : (classesExpand += " expandedCard")
      }
      onClick={updateExpand}
    >
      {selectedExpand === title &&
        searchedMovies?.map(
          (movie) =>
            (movie.backdrop_path || movie.profile_path) && (
              <MovieItem movieData={movie} key={movie.id} />
            )
        )}
      <h3
        className={
          selectedExpand === title ? "modeTitle onSearchModeTitle" : "modeTitle"
        }
      >
        {title}
      </h3>
      {/* {selectedExpand === title && searchTerm === "" && (
        <p className="modeExplanation">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio
          exercitationem, voluptatem repellat eum officiis reiciendis odio
          quidem doloribus porro! Nemo corrupti autem blanditiis unde ipsa
          itaque tempora commodi pariatur?
        </p>
      )} */}
    </div>
  );
};

export default ModeCard;
