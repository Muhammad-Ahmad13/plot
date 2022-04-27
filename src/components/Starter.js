import React from "react";
import FeatureMain from "./StarterpageContent/Feature/FeatureMain";
import FooterPlot from "./StarterpageContent/FooterPlot";
import PlotThere from "./StarterpageContent/Plotthere/PlotThere";
import StarterForm from "./StarterpageContent/StarterForm";
import StarterHead from "./StarterpageContent/StarterHeader/StarterHead";
import Testimonial from "./StarterpageContent/Testimonials/Testimonial";


import WorkComponent from "./StarterpageContent/WorkComponent";
const Starter=()=>{
    return(
        <div>
            <StarterHead></StarterHead>
            <PlotThere></PlotThere>
            <WorkComponent></WorkComponent>
            <FeatureMain></FeatureMain>
            <Testimonial></Testimonial>
            <StarterForm></StarterForm>
            <FooterPlot></FooterPlot>
        </div>
    );
}
export default Starter;