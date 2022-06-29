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
import Search from "../Verfication/Search";
import { useSelector } from "react-redux/es/exports";
const HomePage = () =>{
    const {isLoggedIn} = useSelector(state => state.auth)
    return(
        <div>
            <HomeHeader />
            <HomeWrapper />
            {isLoggedIn && <Search/>}
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