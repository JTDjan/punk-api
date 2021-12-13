import React from "react";
import "./Main.scss";
import CardList from "../CardList/CardList";


const Main = (props) => {
  const {filterBeerArr} =props;

  return (
    <div className="main"> 
      <h1 className="main__title">Punk API</h1>


    

      <CardList filterBeerArr={filterBeerArr}/>
     
    </div>
  )
};
export default Main;