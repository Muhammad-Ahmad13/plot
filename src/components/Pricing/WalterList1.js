import React from 'react';
import WalterListTrue from './WalterListTrue';
import WalterListWrong from './WalterListWrong';
import correctitem from "../../assets/images/correct-item.png";
import wrongitem from "../../assets/images/wrong-item.png";
const WalterList1 = (props) => {
  return (
    <div className="walterlistingdata">
        <WalterListTrue
        walterlistimage1={correctitem}
        walterlistdata1="Onbeperkt woningrapporten maken"
        />
        <WalterListTrue
         walterlistimage1={correctitem}
         walterlistdata1="100 vergelijkbare huizen"
        />
        <WalterListTrue
         walterlistimage1={correctitem}
         walterlistdata1="Prijs per vierkante meter vergeleken"
        />
        <WalterListTrue
         walterlistimage1={correctitem}
         walterlistdata1="Geïndexeerde koopsommen"
        />
        <WalterListWrong
        walterlistimage1={wrongitem}
        walterlistdata1 ="Koopsom per adres"
        />
        <WalterListWrong
         walterlistimage1={wrongitem}
         walterlistdata1 ="Datagedreven biedingstrategieën"
        />
        <WalterListWrong
         walterlistimage1={wrongitem}
         walterlistdata1 ="Hulp bij uitbrengen bod"
        />
    </div>
  );
}

export default WalterList1;