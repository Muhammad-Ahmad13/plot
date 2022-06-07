import React from 'react';
import WalterListTrue from './WalterListTrue';
import WalterListWrong from './WalterListWrong';
import correctitem2 from "../../assets/images/correct-item.png";
import wrongitem2 from "../../assets/images/wrong-item.png"; 

const WalterList3 = () => {
  return (
    <div>
        <div className="walterlistingdata">
            <WalterListTrue
            walterlistimage1={correctitem2}
            walterlistdata1="Onbeperkt woningrapporten maken"
            />
            <WalterListTrue
            walterlistimage1={correctitem2}
            walterlistdata1="100 vergelijkbare huizen"
            />
            <WalterListTrue
            walterlistimage1={correctitem2}
            walterlistdata1="Prijs per vierkante meter vergeleken"
            />
            <WalterListTrue
            walterlistimage1={correctitem2}
            walterlistdata1="Geïndexeerde koopsommen"
            />
             <WalterListTrue
            walterlistimage1={correctitem2}
            walterlistdata1="Koopsom per adres"
            />
            <WalterListTrue
            walterlistimage1={correctitem2}
            walterlistdata1="Datagedreven biedingstrategieën"
            />
            <WalterListTrue
            walterlistimage1={correctitem2}
            walterlistdata1="Hulp bij uitbrengen bod"
            />
        </div>
    </div>
  );
}

export default WalterList3;