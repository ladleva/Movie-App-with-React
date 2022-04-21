import React, { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      props.enterHandler(search, type);
    }
  };

  const handleFilter = (event) => {
    setType(event.target.value);
    props.enterHandler(search, event.target.value);
  };

  return (
    <div className="row">
      <div>
        <input
          type="text"
          className="inputMain"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyUp={handleEnter}
          placeholder="For example — Harry Potter"
        />
        <button
          className="btn"
          onClick={() => props.enterHandler(search, type)}
        >
          Search
        </button>
      </div>

      <div className="form_radio_group">
        <input
          type="radio"
          name="type"
          value="all"
          onChange={handleFilter}
          checked={type === "all"}
          className="with-gap"
        />
        <label>All</label>

        <input
          type="radio"
          name="type"
          value="movie"
          onChange={handleFilter}
          checked={type === "movie"}
          className="with-gap"
        />
        <label>Movies only</label>

        <input
          type="radio"
          name="type"
          value="series"
          onChange={handleFilter}
          checked={type === "series"}
          className="with-gap"
        />
        <label>Series only</label>
      </div>
    </div>
  );
};

export default Search;
