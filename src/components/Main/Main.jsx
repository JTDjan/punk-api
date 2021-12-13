import React from "react";
import "./Main.scss";
import CardList from "../CardList/CardList";

const Main = (props) => {
  const { filterBeerArr } = props;

  return (
    <div className="main">
      <CardList filterBeerArr={filterBeerArr} />
    </div>
  );
};
export default Main;
