import React from 'react';
import './App.scss';

import beers from "./data/data";
import Main from './components/Main/Main';
import Navbar from "./components/Navbar/Navbar";



const App = () => {
 
  return (
    <>
    <Navbar />
    <Main beersArr={beers}/>
    </>
  );
}

export default App;
