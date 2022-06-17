import React from 'react';
import { Link } from 'react-router-dom';
import "./TabsHeader.css";
const ProfileData = (props) => {
  return (
    <div className="profiledatamain">
        <div className="dropdowncontent ">
            <div className="dropdown profileimg">
                <a className="" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={props.profimg} alt = "propileImage"/>
                    <span>{props.profhead}</span>
                    <img src={props.profIcon} alt = "contentimage"/>
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><Link className="dropdown-item" to ="#">Profile</Link></li>
                    <li><Link className="dropdown-item" to ="#">Refernces</Link></li>
                    <li><Link className="dropdown-item" to ="#">Sign Out</Link></li>
                </ul>
            </div>
        </div>
    </div>
  );
}
export default ProfileData;