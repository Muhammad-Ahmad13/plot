import React from 'react';
import Tservicecard from './Tservicecard';
import serv1 from "../../assets/images/service1.png";
import serv2 from "../../assets/images/service2.png";
import "./TabingService.css";
const TabingService = () => {
  return (
    <div className="tsmain">
        <div className='tsmaincontent'>
            <Tservicecard
            scardhead="Your Subscription"
            scardimage={serv1}
            scardpara="Plotcore Plus"
            ancCard1="Cancel Plotcore Plus"
            />
        </div>
        <div className='tsmaincontent'>
            <Tservicecard
            scardhead="Payment Details"
            scardimage={serv2}
            scardpara="Change Payment Details"
            ancCard1="Update Account Number"
            scardpara1="Lörem ipsum georening buköska vaben. Dögyns eurong."
            scardpara2="Povisovis josm, emedan semis."
            />
        </div>
    </div>
  );
}
export default TabingService;