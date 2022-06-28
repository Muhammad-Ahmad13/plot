import React from 'react';
import FactCards from './FactCards';
import "./ReportFacts.css";
import ReportHP from './ReportHP';
const ReportFacts = (props) => {
  return (
    <div className="reportfactmain">
        <div className="reportfacthead py-3">
            <ReportHP
                hphead = "Feiten en cijfers."
                hppara = "Huizenprijzen ontwikkelen snel. Hier zie je de meest recente vierkantemeterprijzen en koopsommen in de buurt. Zie hoeveel huizen het afgelopen jaar zijn verkocht en hoe lang ze te koop hebben gestaan."
             />
        </div>
        <div className="container">
            <div className="reportfactsec">
                <div className='reportfactcontent'>
                    <FactCards
                    factnum="35"
                    facthead="Dagen op de mark"
                    factpara="Zo lang stond een huis hier vorig jaar gemiddeld op de markt."
                    />
                </div>
                <div className='reportfactcontent'>
                    <FactCards
                    factnum ={props.totalNeigh} 
                    facthead="Huizen verkocht"
                    factpara="Dit waren alle transacties in de wijk in de afgelopen 12 maanden."
                    />
                </div>
                <div className='reportfactcontent'>
                    <FactCards
                    factnum={props.pricest}
                    facthead="Gemiddelde koopsom"
                    factpara="Wielwijk vergeleken met € 272.500 in Dordrecht."
                    />
                </div>
                <div className='reportfactcontent'>
                    <FactCards
                    factnum ={props.pricetm}
                    facthead="Gem. vierkantemeterprijs"
                    factpara="Wielwijk vergeleken met € 2.927 in Dordrecht."
                    />
                </div>
            </div>
        </div>
    </div>
  );
}
export default ReportFacts;