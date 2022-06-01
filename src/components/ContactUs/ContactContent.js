import React from 'react';
import "./ContactContent.css"
import plottingimage from "../../assets/images/contactform-image.png";
import contacticon1 from "../../assets/images/mapicon.png";
import contacticon2 from "../../assets/images/phoneicon.png";
import contacticon3 from "../../assets/images/mailicon.png";
const ContactContent = () => {
  return (
  <>
   <div className="contactcontentmain">
        <img src={plottingimage} alt = "contentimage"/>
   </div>
   <div className="quartersec">
       <div className="quartermain">
           <div className="quarterimage">
               <img src={contacticon1}/>
            </div>
            <div className="quartercontent">
                <h3>Headquaters</h3>
                <p>Plot 1, 1112, New york</p>
            </div>
        </div>
        <div className="quartermain">
           <div className="quarterimage">
               <img src={contacticon2}/>
            </div>
            <div className="quartercontent">
                <h3>Phone Number</h3>
                <p>23232-2323-232</p>
            </div>
        </div>
        <div className="quartermain">
           <div className="quarterimage">
               <img src={contacticon3}/>
            </div>
            <div className="quartercontent">
                <h3>Email</h3>
                <p>contact@plotcore.com</p>
            </div>
        </div>
   </div>
  </>
  )
}
export default ContactContent;