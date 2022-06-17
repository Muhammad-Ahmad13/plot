import React from 'react';
import { Link } from 'react-router-dom';
import "./HouseSearch.css";
const HouseSearch = () => {
  return (
    <div className="hsearchmain text-center">
        <input
        id="hsearch"
        name="hsearch"
        placeholder="Typ straatnaam en huisnummer"
        required/>
        <Link to="">Submit</Link>
    </div>
  );
}

export default HouseSearch;