import React from 'react'
    
let Search = ({ setSearch, setPageNumber }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearch(e.target.value); 
    setPageNumber("");
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
      <button className="search-button">Search</button>
    </form>
  )
}

export default Search;

// This is a functional component called Search that accepts two props, setSearch and setPageNumber.

//     It defines a function handleSubmit which takes an event as an argument.
//     Inside the function, it first prevents the default behavior of the event.
//     It then uses the setSearch prop to set the value of the input field as the value of the search state.
//     It also uses the setPageNumber prop to reset the pageNumber state to an empty string.
//     It returns a JSX form with an input field and a button.
//     The input field has an onChange event listener that calls the handleSubmit function when the input value is changed.
//     The button have class of search-button
//     The component is exported as default so that it can be imported and used in other parts of the application.