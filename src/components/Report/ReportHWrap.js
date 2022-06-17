import React from 'react';
import ProfileData from '../AccountTabs/ProfileData';
import { Link } from 'react-router-dom';
import dropIcon1 from "../../assets/images/proposhat.png";
import "./ReportHWrap.css";
const ReportHWrap = () => {
  return (
    <div className="Hwrapmain">
        <div className="container">
            <div className="Hwrapdata">
                <div className="Hwrapcontent1">
                    <ul>
                        <li>
                            <Link to="#">Alles</Link>
                        </li>
                        <li>
                            <Link to="#">Woningwaarde</Link>
                        </li>
                        <li>
                            <Link to="#"> Vergelijk</Link>
                        </li>
                        <li>
                            <Link to="#">Bieden</Link>
                        </li>
                        <li>
                            <Link to="#">Woningmarkt</Link>
                        </li>
                    </ul>
                </div>
                <div className="Hwrapcontent2">
                    <div className="dropdown hwrapdropimg">
                        <a className="" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <label>Filteren:</label>
                            <span> Alle woningtypen</span>
                            <img src={dropIcon1} alt = "contentimage"/>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><Link className="dropdown-item" to ="#">Profile</Link></li>
                            <li><Link className="dropdown-item" to ="#">Refernces</Link></li>
                            <li><Link className="dropdown-item" to ="#">Sign Out</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default ReportHWrap;