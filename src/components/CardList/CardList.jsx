import React from "react";


import Card from "../Card/Card.jsx";

const CardList = (props) => {
  const {beersArr} = props
  console.log(beersArr)

  const cardlistArray = beersArr.map((beer, index) => {
    return(
     <Card key={beer + index} beerName={beer.name} beerDescription={beer.description} beerImg={beer.image_url} beerAbv={beer.abv} />
     )
    
  })
  return (
    <div className="CardList_container">
      {cardlistArray}
    </div>
  )
}
export default CardList;
