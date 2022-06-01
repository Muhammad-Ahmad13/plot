import React from 'react';
import "./ComingDevelop.css";
import { Link } from 'react-router-dom';
import develop1 from "../../assets/images/develop1.png";
import develop2 from "../../assets/images/develop2.png";
import develop3 from "../../assets/images/develop3.png";
const ComingDevelop = () => {
  return (
    <div className="comingmain">
        <div className="container">
            <div className="comingcontent">
                <p>
                    Bekijk onze aankomende ontwikkelingen op basis van ideeën van onze klanten.
                </p>
                <div className="cominganc">
                    <Link to = "#">Alle ideeën bekijken en stemmen</Link>
                </div>
                <div className='comingimage1 developabs1'>
                    <img src={develop1} alt = "imagedevelop"/>

                </div>
                <div className='comingimage2 developabs2'>
                    <img src={develop2} alt = "imagedevelop"/>
                </div>
                <div className='comingimage2 developabs3'>
                    <img src={develop3} alt = "imagedevelop"/>

                </div>
            </div>
        </div>

    </div>
  )
}

export default ComingDevelop;