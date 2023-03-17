import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./cards/Card";
import { useEffect, useState } from "react";
import Search from "./search/Search";
import "./App.css";
import Typewriter from "typewriter-effect";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [fetchedData, setFetchedData] = useState({});
  const { info, results } = fetchedData;
  console.log(info);
  const api = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}`;

  async function fetchCharacters() {
    const data = await fetch(api).then((res) => res.json());
    setFetchedData(data);
  }
  // const text = new Typewriter("#typewriter", {
  //   strings: ["Guess who just discovered a new element?!"],
  //   autoStart: true,
  // });
  useEffect(() => {
    fetchCharacters();
  }, [search, pageNumber]);

  const handleNextPage = () => {
    if (info && info.next === null) {
      setPageNumber(1);
    } else {
      const nextPage = info.next.slice(47);
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

  useEffect(() => {
    // new Typewriter("#typewriter", {
    //   strings: ["Guess who just discovered a new element?!"],
    //   autoStart: true,
    // });
  }, []);

  return (
    <div className="app">
      <div className="ux-app">
        {/* <h1 id="typewriter" className="text-center">
          Guess who just discovered a new element?!
        </h1> */}
        <Typewriter
          className="typo"
          options={{
            strings: ["Guess who just discovered a new element?!"],
            autoStart: true,
            loop: true,
          }}
        />
        <div className="container d-flex flex-wrap justify-content-center">
          <button className="button" onClick={() => setPageNumber(1)}>
            main
          </button>
          <button className="button" onClick={handlePrevPage}>
            ←
          </button>
          <button className="button" onClick={handleNextPage}>
            →
          </button>
          <Search
            setSearch={setSearch}
            search={search}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        </div>
      </div>

      <div className="container d-flex justify-content-center">
        <div className="col-8">
          <div className="row">
            {results &&
              results.map((character) => {
                return <Cards character={character} key={character.id} />;
              })}
          </div>
          <div className="footer">
            <h1>&copy; {new Date().getFullYear()} [ juli schawert ]</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
