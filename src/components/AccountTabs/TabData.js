import React from 'react';
import "./TabData.css";
import homeicon from "../../assets/images/tab-home.png";
import naviicon from "../../assets/images/nav-tab.png";
const TabData = () => {
  return (
    <div className="tabdata">
        <div className="dataimg">
            <img src={homeicon}/>
        </div>
        <div className="dataimg">
            <img src={naviicon}/>
        </div>
    </div>
  );
}
export default TabData;