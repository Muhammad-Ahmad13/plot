import React from "react";
import "./HomeFooter.css";
import footImage from "../../../assets/images/logo-image.png";
import footIcon1 from "../../../assets/images/foot-icon-1.png";
import footIcon2 from "../../../assets/images/foot-icon-2.png";
import footIcon3 from "../../../assets/images/foot-icon-3.png";
import footIcon4 from "../../../assets/images/foot-icon-4.png";
import { Link } from "react-router-dom";
const HomeFooter = () =>{
    return(
        <footer>
             <div className="hfoot-main">
                 <div className="container">
                     <div className="hfoot-sec">
                        <div className="hfoot-content1">
                            <div className="hfoot-image">
                                <Link to = "/">
                                    <img src={footImage} alt="logo-footer"/>
                                </Link>
                            </div>
                            <p>
                                Lorem ipsum aras beskade nede plakar. Sad monorade. Soven fade negon. 
                                Samosat neras pykas. Preligt anas egoliga. Astrovis lavis revis an. 
                            </p>
                            <ul>
                                <li>
                                <Link to="#"><img src={footIcon1} alt="foot-icon"/></Link>
                                <Link to="#"><img src={footIcon2} alt="foot-icon"/></Link>
                                <Link to="#"><img src={footIcon3} alt="foot-icon"/></Link>
                                <Link to="#"><img src={footIcon4} alt="foot-icon"/></Link>
                                </li>
                            </ul>
                        </div>
                        <div class="hfoot-content2">
                            <h5>Huis kopen met Plotcore Living</h5>
                            <ul>
                                <li>
                                <Link to="#">Hoe het werkt</Link>
                                </li>
                                <li>
                                <Link to="#">Plotcore Alles-in-1</Link>
                                </li>
                                <li>
                                <Link to="#">Plotcore Plus</Link>
                                </li>
                                <li>
                                <Link to="#">Plotcore webinar</Link>
                                </li>
                                <li>
                                <Link to="#">Prijzen</Link>
                                </li>
                                <li>
                                <Link to="#">For Expats</Link>
                                </li>
                            </ul>
                        </div>
                        <div class="hfoot-content3">
                            <h5>Huis kopen met Plotcore Living</h5>
                            <div className="hfoot-listing">
                                <div className="hfoot-list-content">
                                    <ul>
                                        <li>
                                        <Link to="#">Wie is Plotcore</Link>
                                        </li>
                                        <li>
                                        <Link to="#">Neem contact op</Link>
                                        </li>
                                        <li>
                                        <Link to="#">Veelgestelde vragen</Link>
                                        </li>
                                        <li>
                                        <Link to="#">Blog</Link>
                                        </li>
                                        <li>
                                        <Link to="#">Werken bij Plotcore</Link>
                                        </li>
                                        <li>
                                        <Link to="#">Vriendenkorting</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="hfoot-list-content">
                                    <ul>
                                        <li>
                                        <Link to="#">Privacy</Link>
                                        </li>
                                        <li>
                                        <Link to="#">Voorwaarden</Link>
                                        </li>
                                        <li>
                                        <Link to="#">Nederlands</Link>
                                        </li>
                                        <li>
                                        <Link to="#">English</Link>
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