import React from "react";

let Search = ({ setSearch, setPageNumber }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    setPageNumber("");
  };
  return (
    <form className="d-flex justify-content-center">
      <input
        onChange={handleSubmit}
        placeholder="Search for"
        type="text"
        className=""
      ></input>
      <button className="search-button">Search</button>
    </form>
  );
};

export default Search;
