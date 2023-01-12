import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./cards/Card";
import { useEffect, useState } from "react";
import Search from "./search/Search";
import "./App.css";


function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch ] = useState("")
  let [fetchedData, setFetchedData] = useState({});
  let { info, results } = fetchedData;
  console.log(info)
  let api = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}`;

  //why should I use const instead of let in a state? 

  //retrieve data from an API endpoint
  //to update the component's state with the fetched data:
  //((((async function runs in a non-blocking way, meaning that it doesn't stop or block the execution of other code while it's
  //the rest of the code))))
  async function fetchCharacters() {
    let data = await fetch(api).then((res) => res.json());
    setFetchedData(data);
  }

  //the useEffect will run 
  //"on render"
    useEffect(() => {
    fetchCharacters();
  }, [search, pageNumber]);

//function sets the pagenumber to 1 when called
 //function checks if there is an info object, and if the next property of info is null, it sets the pageNumber to 1
//If there is no info object or the next property of info is not null, it increments the pageNumber by 1 
  const handleNextPage = () => {
    if (info && info.next === null) {
      setPageNumber(1);
    } else {
      const nextPage = info.next.slice(47)
      setPageNumber(nextPage);
    }
  };
  const handlePrevPage = () => {
    if (info && info.prev === null) {
      setPageNumber(info.pages);
    } else {
      const prevPage = info.prev.slice(47);
      setPageNumber(prevPage);
    }
  };

  return (
    <div className="app">
      <div className="ux-app">
      <h1 className="text-center">Guess who just discovered <br></br>a new element?!</h1>
      <div className="container d-flex flex-wrap justify-content-center">
      <button className="button" onClick={() => setPageNumber(1)}>↓</button>
      <button className ="button" onClick={handlePrevPage}>←</button>
      <button className="button" onClick={handleNextPage}>→</button>
      <Search setSearch={setSearch}
          search={search} 
          pageNumber={pageNumber} 
          setPageNumber={setPageNumber}/>
        </div>
        </div>
        
      <div className="container d-flex justify-content-center">
          <div className="col-8">
            <div className="row">
              {results &&
  results.map((character) => {
    return (
      <Cards character={character} key={character.id} />
    );
  })}
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
