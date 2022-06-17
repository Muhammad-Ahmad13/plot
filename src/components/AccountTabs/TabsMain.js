import React from 'react';
import "./TabsMain.css";
import TabsHeader from './TabsHeader';
import TabData from './TabData';
import TabingContent from './TabingContent';
const TabsMain = () => {
  return (
    <div className="tabmain">
        <div className="tabborder">
            <div className="tabcontain">
                <TabsHeader/>
            </div>
        </div>
        <div className="tabdatasetmain">
            <div className="tabdataset1">
                <TabData/>
            </div>
            <div className="tabdataset2">
                <TabingContent/>
            </div>
        </div>
    </div>
  );
}
export default TabsMain;