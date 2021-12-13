import React from "react";
import "./Navbar.scss";
import SearchBox from "../SearchBox/SearchBox";

const Navbar = (props) => {
  const { handleInput, search } = props;
  return (
    <nav className="nav">
      <SearchBox handleInput={handleInput} search={search} />
    </nav>
  );
};
export default Navbar;
