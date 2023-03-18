import React from "react";
import Lupe from "../assets/search.png";

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
        placeholder="Search for. . ."
        type="text"
        className=""
      ></input>
      <button className="search-button">
        <img src={Lupe} alt="Lupe" id="lupe" />
      </button>
    </form>
  );
};

export default Search;
