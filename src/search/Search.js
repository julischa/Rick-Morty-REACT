import React from 'react'
    
let Search = ({ setSearch }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }
  return (
    <form className="d-flex justify-content-center">
      <input
        onChange={handleSubmit}
        placeholder="Search for" 
        type="text" 
        className=""
      >
      </input>
      <button className="btn btn-primary">Search</button>
    </form>
  )
}

export default Search;