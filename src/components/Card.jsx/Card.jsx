import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { beerName, beerDescription, beerImg, beerAbv } = props; 

return (
  <div className ="card">
    <img className="card__img" src={beerImg} alt="Image of beer" />
    <h3 className="card__title" >Name:{beerName}</h3>
    <h4 className="card__Abv">ABV:{beerAbv}</h4>
    <p className="card__description">{beerDescription}</p>

  </div>
)
}

export default Card;