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
      <div className='form'>
        <form onSubmit={searchHandler}>
          <input
            id="searchInput"
            placeholder="Buscar"
            onChange={onChangeHandler}
            className='input'
          />
          <label htmlFor="searchInput" className='inputLabel'>
            Buscar
          </label>
        </form>
      </div>
    );
  };
  
  export default SearchForm;