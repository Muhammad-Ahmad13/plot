import React from 'react';
import { Link } from 'react-router-dom';
import "./ProposalHeader.css";
import propos1 from "../../assets/images/propos1-removebg-preview.png";
import propos2 from "../../assets/images/propos2-removebg-preview.png";
import propos3 from "../../assets/images/propos3-removebg-preview.png";
const ProposalHeader = () => {
  return (
    <div className="proposalheadermain">
        <div className="proposbg">
            <div className="container">
                <div className="proposalheaderdata">
                    <h4>
                        Idee of verbetervoorstel voor Plotcore?
                    </h4>
                    <h6>
                        Wij hebben jou nodig!
                    </h6>
                    <p>
                        Hierbij vragen wij jullie om hulp. Mocht je een goed idee hebben voor Plotcore, verbeteringen omtrent onze data of een ander verbetervoorstel hebben,
                        schroom dan niet. Neem contact met ons op en wij zorgen er direct voor dat ons team aan specialisten dit voor u realiseert.
                    </p>
                    <div className="proposalanc">
                        <Link to ="#">Idee opgeven</Link>
                    </div>
                    <div className="proposimageabs1">
                        <img src={propos1}/>
                    </div>
                    <div className="proposimageabs2">
                        <img src={propos2}/>
                    </div>
                    <div className="proposimageabs3">
                        <img src={propos3}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProposalHeader;