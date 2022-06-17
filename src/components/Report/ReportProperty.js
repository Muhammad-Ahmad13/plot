import React from 'react'
import { Link } from 'react-router-dom';
import ReportECard from './ReportECard';
import ReportHP from './ReportHP';
import ReportMinCard from './ReportMinCard';
import "./ReportProperty.css";
const ReportProperty = () => {
  return (
    <div className="rpropertymain">
      <div className="container">
          <ReportHP
          hphead="Omgeving en pand."
          hppara="De buurt, het bestemmingsplan en de monumentale status bepalen wat je mag met het huis en waar je een 
          vergunning voor moet aanvragen. Wil je structureel gaan verbouwen, laat je dan goed inlichten door een expert."
          />
          <div className="rpropertyanc text-center">
              <Link to="#">Lees het bestemmingsplan</Link>
          </div>
          <div className="rpropertycard">
            <div className="rpropertycontent">
              <ReportMinCard
              minhead="De buren"
              minpara="Voornamelijk woonhuizen"
              />
            </div>
            <div className="rpropertycontent">
              <ReportMinCard
                minhead="Gebied"
                minpara="Wielwijk, Dordrecht"
                />
            </div>
            <div className="rpropertycontent">
              <ReportMinCard
                minhead="Buurt"
                minpara="Woonwijk"
                />
            </div>
            <div className="rpropertycontent">
              <ReportMinCard
                minhead="Monumentale status"
                minpara="Geen"
                />
            </div>
          </div>
          <div className="rPropertyEcard">
            <div className="rpropertyEcontent">
              <ReportECard
              Ehead="Energielabel."
              Epara="Een goed energielabel scheelt fors in de energiekosten. Is er nog geen definitief energielabel? Dan moet de verkopende partij deze aanvragen.
              Van deze woning is geen energielabel bekend. Vraag het aan de verkopende partij."
              Eanc="Meer informatie op EP-online"
              />
            </div>
            <div className="rpropertyEcontent">
              <ReportECard
              Ehead="Fundering."
              Epara="Afhankelijk van het bouwjaar en de ondergrond kan de fundering aan vernieuwing toe zijn. Wij zijn voor je nagegaan of je risico
              loopt op een rotte of verzakte fundering."
              Epara1=" Extra aandacht voor de fundering is nodig. Dit huis is gebouwd voor 1970 en staat in Zeekleigebied. Er is een kans dat de originele
              houten funderingspalen niet meer goed zijn. Ook kan de zwakke ondergrond hebben gezorgd voor verzakkingen."
              Eanc="Meer informatie op KCAF"
              />
            </div>
          </div>
        </div>
    </div>
  );
}

export default ReportProperty;