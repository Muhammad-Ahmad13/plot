import React from "react";
import "./FooterWrapper.css";
import logo from "../assets/images/logo-image.png";
const FooterWrapper=()=>{
    return(
        <footer>
        <div class="footmain">
            <div class="container">
                <div class="foot-top px-3 d-flex justify-content-between">
                    <div class="foot-sec">
                    <div>
                        <div className="footer-image">
                          <img src={logo} alt="logo-footer"/>
                        </div>
                        <p>
                          1337 Tengecha Road,Nairobi.Imarisha Tower, Second Floor, Room 135
                        </p>
                          <ul>
                          <li>
                            <span>+254720843306</span>
                          </li>
                          <li>
                            <span>+254720843306</span>
                          </li>
                          <li>
                            <span>realhome@gmail.com</span>
                          </li>
                          </ul>
                      </div>
                    </div>
                    <div class="foot-sec">
                        <h5>Quick Links</h5>
                    <ul>
                        <li>
                        <a to="/">HOME</a>
                        </li>
                        <li>
                        <a to="/listing">ABOUT</a>
                        </li>
                        <li>
                        <a to="/agents">SERVICES</a>
                        </li>
                        <li>
                        <a to="/faqs">CASE STUDIES</a>
                        </li>
                        <li>
                        <a to="/dashboard">CONTACT</a>
                        </li>
                        <li>
                        <a to="/login">LOGIN</a>
                        </li>
                    </ul>
                    </div>
                    <div class="foot-sec">
                        <h5>Social as</h5>
                    <ul>
                        <li>
                        <a to="#">Facebook</a>
                        </li>
                        <li>
                        <a to="#">Twitter</a>
                        </li>
                        <li>
                        <a to="#">Linkedin</a>
                        </li>
                        <li>
                        <a to="#">YouTube</a>
                        </li>
                        <li>
                        <a to="#">Instagram</a>
                        </li>
                    </ul>
                    </div>
                  </div>
                  <div>
                  </div>
            </div>
            <div class="footbottom bg-dark">
              <div className="container">
              <div class="text-white">&copy; Real Home. All Rights Reserved</div>
              </div>
            </div>
        </div>
    </footer>
    );
}
export default FooterWrapper;