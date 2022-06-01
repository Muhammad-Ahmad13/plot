import React from "react";
import HomeHeader from "../HomePage/HomeHead/HomeHeader";
import HomeFooter from "../HomePage/HomeFooter/HomeFooter";
import ContactForm from "../HomePage/ContactForm/ContactForm";
import ReviewsMain from "../HomePage/Reviews/ReviewsMain";
import WorkStarter from "./WorkStarter/WorkStarter";
import PlotCoreStarter from "./PlotCoreStarter";
import ForStarterHead from "./ForStarterHead/ForStarterHead";
const ForStarter =() => {
    return(
        <>
        <HomeHeader/>
        <ForStarterHead/>
        <PlotCoreStarter/>
        <WorkStarter/>
        <ReviewsMain/>
        <ContactForm/>
        <HomeFooter />
        </>
    );
}
export default ForStarter;