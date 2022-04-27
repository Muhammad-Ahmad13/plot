import {React,useEffect,useState} from "react"; 
import axios from "axios"
import "./HeadHeader.css"
import facebook from "../assets/images/face-logo.png";
import insta from "../assets/images/insta-logo.jpg";
import linked from "../assets/images/linkedin-logo.png";
import twitter from "../assets/images/twitter-logo-removebg-preview.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const HeadHeader=()=>{
    const [address , setAddress] = useState(' ');
    const [isPending, SetIsPending] = useState(false);
    let res;
   
    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {address};
        console.log(blog);
        SetIsPending(true);
        fetch('http://34.90.29.163:90/emailApi/email/',{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body : JSON.stringify(blog)
        }).then((response)=>{
            console.log(response.status);
            res = response.status;
            switch(res){
                case 201:
                toast.success("data submit successfully");
                break;
                case 400:
                toast.error("data already exist");
                break;
                case 500:
                toast.info("data does not submit");
                break;
                default:
                toast.info("data does not submit");
            }
            console.log("new blog added");
            SetIsPending(false);
        })     
    }
    //  useEffect(() => {
    //      handleSubmit();
    //   },[]);
    return(
        <section className="plotwrapper">
        <div className="container">
                <div className="plotwrapper-content1">
                    <h1>De beste manier van een huis kopen.</h1>
                    <h4>
                        Wees de eerste die toegang krijgt tot het platform en maak kans op een exclusief premium account t.w.v. 500,-
                    </h4>
                    <p>
                      Meld je aan voor de lijst voor de mensen met vroege toegang om toegang te krijgen tot in-app-voordelen die
                      alleen beschikbaar zijn voor onze vroege abonees 
                    </p>
                    <div className="plotwrapper-anc">
                        <form onSubmit={handleSubmit}>
                            <div className="plotwrapper-input">
                                <input
                                 type="email"
                                 placeholder="Email Address"
                                 name='email'
                                 required
                                 value={address}
                                 onChange={(e) => setAddress(e.target.value)}
                                 />
                                {!isPending && <button type="submit">
                                    Zet mij op de lijst!
                                </button>}
                                {isPending && <button type="submit">
                                    Zet mij op de lijst!
                                </button>}
                            </div>
                           
                        </form>
                    </div>
                    <ToastContainer 
                        position="top-center"
                        autoClose={3000}
                    />
                    <div className="social-media">
                        <div className="media-icon">
                            <a href="https://www.facebook.com/Plotcore/"><img src={facebook} alt="logo"/></a>
                            <a href="https://www.instagram.com/plotcore/"><img src={insta} alt="logo"/></a> 
                            <a href="https://www.linkedin.com/company/plotcore"><img src={linked} alt="logo"/></a>
                            <a href="https://twitter.com/Plotcore"><img src={twitter} alt="logo"/></a>
                        </div>
                    </div>
                </div>
        </div>
    </section>
    );
}
export default HeadHeader;