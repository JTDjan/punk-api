import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { beerName, beerDescription, beerImg, beerAbv } = props; 

return (
  <div className ="card">
    <img className="card__img" src={beerImg} alt="Image of beer" />
    <h3>Name:{beerName}</h3>
    <h4>{beerAbv}</h4>
    <p>{beerDescription}</p>

  </div>
)
}

export default Card;