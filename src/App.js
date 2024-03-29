import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./cards/Card";
import { useEffect, useState } from "react";
import Search from "./search/Search";
import "./App.css";
import Typewriter from "typewriter-effect";
import Footer from "./footer/Footer";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [fetchedData, setFetchedData] = useState({});
  const { info, results } = fetchedData;

  const api = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}`;

  async function fetchCharacters() {
    const data = await fetch(api).then((res) => res.json());
    setFetchedData(data);
  }

  // If you want to filter through all characters, regardless of their pagination, you may find this code snippet helpful:

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

  // By slicing this URL starting from the 47th character the code can extract the value "2"
  // and update the pageNumber state variable accordingly.

  return (
    <div className="app">
      <div className="ux-app text-center" id="ux-app">
        Guess who just discovered
        <Typewriter
          options={{
            strings: ["a new element?!"],
            autoStart: true,
            loop: true,
            cursor: "",
            delay: 50,
            cursorClassName: "pink-cursor",
          }}
        />
      </div>
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

      <div className="container d-flex justify-content-center">
        <div className="col-8">
          <div className="row">
            {results &&
              results.map((character) => {
                return <Cards character={character} key={character.id} />;
              })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
