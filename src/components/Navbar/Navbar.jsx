import React from "react";
import "./Navbar.scss";
import SearchBox from "../SearchBox/SearchBox";

const Navbar = (props) => {
const {handleInput, search} = props;
  return (
    <nav>
      <ul>
        <SearchBox handleInput ={handleInput} search={search}/>
      </ul>
    </nav>
  )
};
export default Navbar;