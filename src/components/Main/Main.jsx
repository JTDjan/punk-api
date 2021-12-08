import React from "react";
import "./Main.scss";
import CardList from "../CardList/CardList";


const Main = (props) => {
  const {beersArr} =props;

  return (
    <div className="main"> 
      <h1>Punk API</h1>


    

      <CardList  beersArr ={beersArr}/>
     
    </div>
  )
};
export default Main;