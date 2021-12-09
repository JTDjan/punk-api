import React, {useState} from "react";
import "./App.scss";

import beers from "./data/data";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
const [search, setSearch] = useState("");

const handleInput = event => {
  setSearch(event.target.value.toLowerCase())
}

console.log(search)

const filterBeerArr = beers.filter(beer => {
  // console.log(beer)
      if(beer.name.toLowerCase().includes(search)){
        return true
      } else { return false}
    
});
  console.log(filterBeerArr,  "filterArr")

  
  return (
    <>
      <Navbar handleInput={handleInput} search={search}/>
      <Main filterBeerArr={filterBeerArr} />
    </>
  );
};

export default App;
