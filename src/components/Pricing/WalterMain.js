import React from 'react'
import WalterComp from './WalterComp';
import WalterList1 from './WalterList1';
import WalterList2 from './WalterList2';
import WalterList3 from './WalterList3';
import "./WalterMain.css";
const WalterMain = () =>{
  return (
      <div className="waltermaster">
          <div className="container">
                <div className="waltermain">
                    <div className="waltersec">
                        <WalterComp
                        walterhead = "Walter Plus"
                        walterheadmain="€ 8,99/mnd."
                        walterpara="Geen verplichtingen, altijd opzegbaar."
                        walterpara1="Een abonnement kost maar € 8,99 per maand na afloop van de gratis proefperiode van 7 dagen."
                        walterlink="Probeer het gratis"
                        waltercompaddress="#"
                        />
                        <WalterList1/>
                    </div>
                    <div className="waltersec">
                        <WalterComp
                        walterhead = "Walter Premium"
                        walterheadmain="€49/mnd."
                        walterpara="Geen verplichtingen, altijd opzegbaar."
                        walterpara1="Een abonnement kost maar € 8,99 per maand na afloop van de gratis proefperiode van 7 dagen."
                        walterlink="Probeer het gratis"
                        waltercompaddress="#"
                        />
                        <WalterList2/>
                    </div>
                    <div className="waltersec">
                        <WalterComp
                        walterhead = "Walter Alles-in-1"
                        walterheadmain="€ 8,99/mnd."
                        walterpara="Achteraf betalen bij de notaris · No cure, no pay"
                        walterpara1 ="Een abonnement kost maar € 8,99 per maand na afloop van de gratis proefperiode van 7 dagen"
                        walterlink="Ik wil een informatiegesprek"
                        waltercompaddress="#"
                        />
                        <WalterList3/>
                    </div>
                </div>
          </div>
      </div>
  );
}
export default WalterMain;