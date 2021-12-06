import React from "react";
import "./CardList.scss";

import beers from "../../data/data";
import Card from "../Card.jsx/Card";

const CardList = () => {
  

  return (
    <div className ="CardList">
    <Card beerImg={beers[0].image_url} beerName={beers[0].name} beerAbv={beers[0].abv} beerDescription={beers[0].description}/> 
    </div>
  )
}
export default CardList;