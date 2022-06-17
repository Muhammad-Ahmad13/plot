import React from 'react'
import ReportCardNImg from './ReportCardNImg';
import ReportContentCard1 from './ReportContentCard1';
import ReportHP from './ReportHP';
import "./ReportNearby.css";

const ReportNearby = () => {
  return (
    <div className="Nearbymain">
        <div className="container">
            <div className="nearbyhead">
                <ReportHP
                    hphead="Wat hebben kopers geboden op huizen?"
                    hppara="Bekijk op hoeveel woningen in de buurt is over- of onderboden."
                />
            </div>
            <div className="nearbyFlex">
                <div className="Nearbycontent1">
                    <div className="Nearbydata">
                        <ReportCardNImg
                        CNimage=""/>
                    </div>
                    <div className="Nearbydata">
                        <ReportCardNImg
                        CNimage=""/>
                    </div>
                    <div className="Nearbydata">
                        <ReportCardNImg
                        CNimage=""/>
                    </div>
                    <div className="Nearbydata">
                        <ReportCardNImg
                        CNimage=""/>
                    </div>
                    <div className="Nearbydata">
                        <ReportCardNImg
                        CNimage=""/>
                    </div>
                    <div className="Nearbydata">
                        <ReportCardNImg
                        CNimage=""/>
                    </div><div className="Nearbydata">
                        <ReportCardNImg
                        CNimage=""/>
                    </div>
                    <div className="Nearbydata">
                        <ReportCardNImg
                        CNimage=""/>
                    </div>
                    <div className="Nearbydata">
                        <ReportCardNImg
                        CNimage=""/>
                    </div>
                    <div className="Nearbydata">
                        <ReportCardNImg
                        CNimage=""/>
                    </div>
                    <div className="Nearbydata">
                        <ReportCardNImg
                        CNimage=""/>
                    </div><div className="Nearbydata">
                        <ReportCardNImg
                        CNimage=""/>
                    </div>
                    <div className="Nearbydata">
                        <ReportCardNImg
                        CNimage=""/>
                    </div>
                    <div className="Nearbydata">
                        <ReportCardNImg
                        CNimage=""/>
                    </div>
                    <div className="Nearbydata">
                        <ReportCardNImg
                        CNimage=""/>
                    </div>
                    <div className="Nearbydata imgColor1">
                        <ReportCardNImg
                        CNimage=""/>
                    </div>
                    <div className="Nearbydata imgColor2">
                        <ReportCardNImg
                        CNimage=""/>
                    </div>
                </div>
                <div className="Nearbycontent2">
                    <ReportContentCard1/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ReportNearby;