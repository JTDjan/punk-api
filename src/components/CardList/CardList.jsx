import React from "react";
import "./CardList.scss"


import Card from "../Card/Card.jsx";

const CardList = (props) => {
  const {filterBeerArr} = props
  

  const cardlistArray = filterBeerArr.map((beer, index) => {
    return(
     <Card key={beer + index} beerName={beer.name} beerDescription={beer.description} beerImg={beer.image_url} beerAbv={beer.abv} />
     )
    
  })
  return (
    <div className="cardList_Container">
      {cardlistArray}
    </div>
  )
}
export default CardList;
