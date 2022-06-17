import React from 'react';
import { Link } from 'react-router-dom';
import icon from "../../assets/images/burger-icon-icon-removebg-preview.png";
import logo1 from "../../assets/images/logo-image.png";
import ProfileData from '../AccountTabs/ProfileData';
import TabsHeader from '../AccountTabs/TabsHeader';
import profimg1 from "../../assets/images/profileimg.png"; 
import dropIcon1 from "../../assets/images/proposhat.png";
import headflag from "../../assets/images/headflag.png";
import "./ReportHeader.css";
const ReportHeader = () => {
  return (
    <div>
      <header>
         <nav className="navbar navbar-expand-lg home-main reportdatamain">
            <div className="container">
            <Link className="navbar-brand" to="/"><img src={logo1} alt="logo_image"/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                    <img src={icon} alt="Buger-icon"/>
                </span>
            </button>
            <div className="reportHeadsec">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav reportdataheight">
                      <li className="nav-item">
                        <div className="dropdown profiledropdown mt-3">
                          <a className="" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={headflag} alt = "propileImage"/>
                            <img src={dropIcon1} alt = "contentimage"/>
                          </a>
                          <ul className="dropdown-menu report-menu" aria-labelledby="dropdownMenuLink">
                              <li><Link className="dropdown-item" to ="#">Profile</Link></li>
                              <li><Link className="dropdown-item" to ="#">Refernces</Link></li>
                              <li><Link className="dropdown-item" to ="#">Sign Out</Link></li>
                          </ul>
                        </div>
                      </li>
                      <div className="report-list-btn">
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Ga naar dashboard</Link>
                        </li>
                      </div>
                      <li className="nav-item mt-4">
                          <Link className="nav-link" to ="#">Neem contact op</Link>
                      </li>
                      <li className="nav-item">
                        <div className="tabprofiledata">
                          <ProfileData
                           profimg = {profimg1}
                           profhead = "Anna"
                           profIcon = {dropIcon1}
                           />
                        </div>
                      </li>
                    </ul>
                </div>
                {/* <div className="tabprofiledata">
                  <ProfileData/>
                </div> */}
            </div>
        </div>
        </nav>
    </header>
    </div>
  );
}
export default ReportHeader;