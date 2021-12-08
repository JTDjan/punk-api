import React, {useState} from "react";
import "./App.scss";

import beers from "./data/data";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
const [search, setSearch] = useState("");

const handleInput = event => {
  setSearch(event.target.value)
  // console.log(event)
}
// setSearch()

  
  return (
    <>
      <Navbar handleInput={handleInput} search={search}/>
      <Main beersArr={beers} />
    </>
  );
};

export default App;
