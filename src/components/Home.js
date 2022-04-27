import React from "react";
import HeaderMain from "./HeaderMain";
import HeadHeader from "./HeadHeader";
import HeadWrapper from "./HeadWrapper";
import "./Home.css";
const Home = ()=>{
    return(
        <>
        <div className="home-bg">
            <HeadWrapper></HeadWrapper>
            <HeadHeader></HeadHeader>
        </div>
        
        </>
        
    );
}
export default Home;