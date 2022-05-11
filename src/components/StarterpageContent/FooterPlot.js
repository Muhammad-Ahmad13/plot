import React from "react";
import "./FooterPlot.css"
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
                        <a href="#">Twitter .</a>
                        <a href="#">Instagram.</a>
                        <a href="#">Dribble</a>

                    </div>
                    <div className="footer-content">
                        <h4>
                            Navigation
                        </h4>
                        <div className="nav-list-main">
                            <div className="nav-list-content">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Contact US</a></li>
                                </ul>
                            </div>
                            <div className="nav-list-content">
                                <ul>
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Terms</a></li>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Cookies</a></li>
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