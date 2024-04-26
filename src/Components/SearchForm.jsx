import './searchForm.css'

const SearchForm = (props) => {
    const searchHandler = (e) => {
      e.preventDefault();
      const searchTerm = e.target[0].value;
      props.onSearchPass(searchTerm);
      props.onShow(false);
      // e.target[0].value = "";
    };
  
    const onChangeHandler = (e) => {
      if (e.target.value === "") {
        props.onInput();
      }
    };
  
    return (
      <div className='formDiv'>
        <h1>Movie Finder</h1>
        <form onSubmit={searchHandler}>
          <input
            id="searchInput"
            placeholder="Search"
            onChange={onChangeHandler}            
          />
        </form>
      </div>
    );
  };
  
  export default SearchForm;