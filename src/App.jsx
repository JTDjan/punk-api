import React, { useState, useEffect } from "react";
import "./App.scss";

// import beers from "./data/data";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [search, setSearch] = useState("");
  const [userRange, setUserRange] = useState([]);

  // useEffect to stop fetch to from looping
  useEffect(() => {
    // Fetching data
    const URL = `https://api.punkapi.com/v2/beers/?page=1&per_page=17`;
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data, "data");
        setUserRange(data);
      });
  }, []);

  const handleInput = (event) => {
    const searchInput = event.target.value.toLowerCase();
    setSearch(searchInput);
  };

  console.log(search);

  const filterBeerArr = userRange.filter((beer) => {
    // console.log(beer)
    if (beer.name.toLowerCase().includes(search)) {
      return true;
    } else {
      return false;
    }
  });
  console.log(filterBeerArr, "filterArr");

  return (
    <div className="appCon">
      <Navbar handleInput={handleInput} search={search} />
      <Main filterBeerArr={filterBeerArr} />
    </div>
  );
};

export default App;
