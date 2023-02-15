const SearchAndFilterComponent = () => {
  return (
    <div className="row justify-content-center mt-2 search-and-filter">
      <div className="col-10">
        <div className="input-group mb-3 chat-search">
          <span className="input-group-text">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search or start new chat"
          />
        </div>
      </div>
      <div className="col-1">
        <i className="fa-solid fa-filter"></i>
      </div>
    </div>
  );
};

export default SearchAndFilterComponent;
