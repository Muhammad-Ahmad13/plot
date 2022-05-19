import React from "react";
import "./FooterPlot.css"
import { Link } from "react-router-dom";
const FooterPlot=()=>{
    return(
        <footer>
            <div className="footer-main">
                <div className="container">
                    <div className="footer-section">
                    <div className="footer-content">
                        <h3>
                            INTERVIEW GUIDE
                        </h3>
                        <p>
                            © 2019 Copyright &amp; Protected by Interview Guide
                        </p>
                        <Link to="#">Twitter .</Link >
                        <Link to="#">Instagram.</Link >
                        <Link to="#">Dribble</Link >
                    </div>
                    <div className="footer-content">
                        <h4>
                            Navigation
                        </h4>
                        <div className="nav-list-main">
                            <div className="nav-list-content">
                                <ul>
                                    <li><Link to="#">Home</Link ></li>
                                    <li><Link to="#">Blog</Link ></li>
                                    <li><Link to="#">Careers</Link ></li>
                                    <li><Link to="#">Contact US</Link ></li>
                                </ul>
                            </div>
                            <div className="nav-list-content">
                                <ul>
                                    <li><Link to="#">FAQs</Link ></li>
                                    <li><Link to="#">Terms</Link ></li>
                                    <li><Link to="#">Privacy</Link ></li>
                                    <li><Link to="#">Cookies</Link ></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content">
                        <h4>
                            Subscribe Newsletter
                        </h4>
                        <div className="letter-input">
                            <input type="email" placeholder="Enter your email"/>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="foot-bottom">
                    <p>
                        © 2019 Interview Guide
                    </p>

                </div>
            </div>
        </footer>
        
    );
}
export default FooterPlot;