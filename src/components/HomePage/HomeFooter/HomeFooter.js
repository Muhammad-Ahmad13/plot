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
                                Hulp nodig met je droomhuis kopen?
                                Want geloof ons. Met Plotcore wordt een huis kopen veel makkelijker 
                            </p>
                            <ul>
                                <li>
                                <Link to="#"><img src={footIcon1} alt="foot-icon"/></Link>
                                <a href="https://twitter.com/Plotcore"><img src={footIcon2} alt="foot-icon"/></a>
                                <a href="https://www.linkedin.com/company/plotcore/"><img src={footIcon3} alt="foot-icon"/></a>
                                <a href="https://www.instagram.com/plotcore/"><img src={footIcon4} alt="foot-icon"/></a>
                                </li>
                            </ul>
                            <div className="foot-contactdata">
                                <a href="tel:+31 6 40848267">+31 6 40848267</a>
                                <div>
                                    <a href="mailto:info@plotcore.com">info@plotcore.com</a>
                                </div>
                            </div>
                            <span></span>
                        </div>
                        <div className="hfoot-content2">
                            <h5>Huis kopen met Plotcore Living</h5>
                            <ul>
                                <li>
                                <Link to="/rental">Verhuur</Link>
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
                                <Link to="/pricing">Prijzen</Link>
                                </li>
                                <li>
                                <Link to="#">For Expats</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="hfoot-content3">
                            <h5>Huis kopen met Plotcore Living</h5>
                            <div className="hfoot-listing">
                                <div className="hfoot-list-content">
                                    <ul>
                                        <li>
                                        <Link to="#">Wie is Plotcore</Link>
                                        </li>
                                        <li>
                                        <Link to="/contactus">Neem contact op</Link>
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
                                        <Link to="/privacy">Privacy</Link>
                                        </li>
                                        <li>
                                        <Link to="/terms">termen</Link>
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