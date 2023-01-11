import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./cards/Card";
import { useEffect, useState } from "react";
import Search from "./search/Search";

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch ] = useState("")
  let [fetchedData, setFetchedData] = useState({});
  let { info, results } = fetchedData;
  let api = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}`;

  //why should I use const instead of let in a state? 

  async function fetchCharacters() {
    let data = await fetch(api).then((res) => res.json());
    setFetchedData(data);
  }

  useEffect(() => {
    fetchCharacters();
  },);

  const handleNextPage = () => {
    if (info && info.next === null) {
      setPageNumber(1);
    } else {
      setPageNumber(pageNumber + 1);
    }
  };
  const handlePrevPage = () => {
    if (info && info.prev === null) {
      setPageNumber(info.pages);
    } else {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div className="app">
      <h1 className="text-center my-5">Guess who just discovered a new element?!</h1>
      <div className="container d-flex flex-wrap justify-content-center">
      <button onClick={handleNextPage}>Next Page</button>
      <button onClick={handlePrevPage}>prev Page</button>
      <Search setSearch={setSearch}
          search={search} 
          pageNumber={pageNumber} 
          setPageNumber={setPageNumber}/>
      </div>
      <div className="container d-flex justify-content-center">
          <div className="col-6">
            <div className="row">
              {results &&
  results.map((character) => {
    return (
      <Cards character={character} key={character.id}>
        <h2>{character.name}</h2>
      </Cards>
    );
  })}
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
