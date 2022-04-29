import React from "react";
import "./HomeFooter.css";
import footImage from "../../../assets/images/logo-image.png";
import footIcon1 from "../../../assets/images/foot-icon-1.png";
import footIcon2 from "../../../assets/images/foot-icon-2.png";
import footIcon3 from "../../../assets/images/foot-icon-3.png";
import footIcon4 from "../../../assets/images/foot-icon-4.png";
const HomeFooter = () =>{
    return(
        <footer>
             <div className="hfoot-main">
                 <div className="container">
                     <div className="hfoot-sec">
                        <div className="hfoot-content1">
                            <div className="hfoot-image">
                                <img src={footImage} alt="logo-footer"/>
                            </div>
                            <p>
                                Lorem ipsum aras beskade nede plakar. Sad monorade. Soven fade negon. 
                                Samosat neras pykas. Preligt anas egoliga. Astrovis lavis revis an. 
                            </p>
                            <ul>
                                <li>
                                <a href="#"><img src={footIcon1} alt="foot-icon"/></a>
                                <a href="#"><img src={footIcon2} alt="foot-icon"/></a>
                                <a href="#"><img src={footIcon3} alt="foot-icon"/></a>
                                <a href="#"><img src={footIcon4} alt="foot-icon"/></a>
                                </li>
                            </ul>
                        </div>
                        <div class="hfoot-content2">
                            <h5>Huis kopen met Plotcore Living</h5>
                            <ul>
                                <li>
                                <a to="#">Hoe het werkt</a>
                                </li>
                                <li>
                                <a to="#">Plotcore Alles-in-1</a>
                                </li>
                                <li>
                                <a to="#">Plotcore Plus</a>
                                </li>
                                <li>
                                <a to="#">Plotcore webinar</a>
                                </li>
                                <li>
                                <a to="#">Prijzen</a>
                                </li>
                                <li>
                                <a to="#">For Expats</a>
                                </li>
                            </ul>
                        </div>
                        <div class="hfoot-content3">
                            <h5>Huis kopen met Plotcore Living</h5>
                            <div className="hfoot-listing">
                                <div className="hfoot-list-content">
                                    <ul>
                                        <li>
                                        <a to="#">Wie is Plotcore</a>
                                        </li>
                                        <li>
                                        <a to="#">Neem contact op</a>
                                        </li>
                                        <li>
                                        <a to="#">Veelgestelde vragen</a>
                                        </li>
                                        <li>
                                        <a to="#">Blog</a>
                                        </li>
                                        <li>
                                        <a to="#">Werken bij Plotcore</a>
                                        </li>
                                        <li>
                                        <a to="#">Vriendenkorting</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="hfoot-list-content">
                                    <ul>
                                        <li>
                                        <a to="#">Privacy</a>
                                        </li>
                                        <li>
                                        <a to="#">Voorwaarden</a>
                                        </li>
                                        <li>
                                        <a to="#">Nederlands</a>
                                        </li>
                                        <li>
                                        <a to="#">English</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hfoot-bottom">
                        <p>
                            © Plot Core 2022
                        </p>
                    </div>
                </div>
             </div>
        </footer>
    );
}
export default HomeFooter;