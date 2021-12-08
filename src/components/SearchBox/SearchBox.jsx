import React from "react";
import "./SearchBox.scss";

const SearchBox = (props) => {
const {handleInput, search} = props

  return (
  <input type="text" placeholder="Search..."  onInput={handleInput} value={search}/>
  )
}
export default SearchBox;