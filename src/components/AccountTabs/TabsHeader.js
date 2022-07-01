import React from 'react';
import "./TabsHeader.css";
import tablogo from "../../assets/images/logo-blue.jpg";
import profimg from "../../assets/images/profileimg1.png"; 
import dropIcon from "../../assets/images/proposhat.png";
import ProfileData from './ProfileData';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const TabsHeader = () => {
  const {usersName} = useSelector(state => state.auth);
  return (
    <div className="tabheadermain">
        <div className="tabheaderlogo">
          <Link to="/"><img src={tablogo} alt="logo-img"/></Link>
        </div>
        <div className="tabprofile">
            <ProfileData
            profimg = {profimg}
            profhead = {usersName}
            profIcon = {dropIcon}/>
        </div> 
    </div>
  );
}
export default TabsHeader;