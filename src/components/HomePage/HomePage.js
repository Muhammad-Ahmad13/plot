import React from "react";
import ImprovementMain from "./Improvement/ImprovementMain";
import ContactForm from "./ContactForm/ContactForm";
import HomeFooter from "./HomeFooter/HomeFooter";
import HomeHeader from "./HomeHead/HomeHeader";
import HomeManagerCards from "./HomeManager/HomeManagerCards";
import HomeStarter from "./HomeStarter/HomeStarter";
import HomeWrapper from "./HomeWrapper/HomeWrapper";
import KunnenMain from "./Kunnen/KunnenMain";
import ReviewsMain from "./Reviews/ReviewsMain";
const HomePage = () =>{
    return(
        <div>
            <HomeHeader />
            <HomeWrapper />
            <HomeStarter />
            <HomeManagerCards />
            <KunnenMain />
            <ReviewsMain />
            <ImprovementMain />
            <ContactForm />
            <HomeFooter />
        </div>
    )
}
export default HomePage;