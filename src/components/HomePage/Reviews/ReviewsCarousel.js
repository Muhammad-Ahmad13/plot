import React from "react";
import CarouselCard from "./CarouselCard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "owl.carousel/dist/assets/owl.theme.default.min.css"
import carous1 from "../../../assets/images/carous-1.png";
import carous2 from "../../../assets/images/carous-2.png";
import carous3 from "../../../assets/images/carous-3.png";
import "./ReviewsCarousel.css";
const options1 ={
    responsiveClass: true,
    nav: true,
    navText: ["<div class='nav-button owl-prev'><</div>","<div class='nav-button owl-next'>></div>"],
    dots: false,
    autoplay: true,
    loop:true,
    margin:20,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 2,
        },
        1025: {
            items: 3,
        }
    },
};
const ReviewsCarousel = () =>{
    return(
        <OwlCarousel
            className="owl-theme-review"
            {...options1}
            >
            <div className="item">
                <div className="carousel-main-content">
                    <CarouselCard 
                    carousPara="Ik kreeg elke dag keurig een lijst met woningen die voldoen aan mijn eisen en wensen.
                    Hierdoor kon ik direct bellen met de makelaar en was ik één van de eerste, waardoor ik de makelaar
                    heb overtuigd om het aan mij te verkopen"
                    carousImage={carous1}
                    carousHeading="Sanne"
                    addressdata="#"
                    carousAnchorText="Rotterdam"
                    />
                </div>
            </div>
            <div className="item">
                <div className="carousel-main-content">
                    <CarouselCard 
                    carousPara="Voordat ik Plotcore gebruikte koste het mij elke dag twee uur om woningen op diverse
                    platformen te zoeken, door Plotcore hoef ik dit niet meer te doen en ontvang ik elke dag een lijst."
                    carousImage={carous2}
                    carousHeading="Mustapha"
                    addressdata="#"
                    carousAnchorText="Amsterdam"
                    />
                </div> 
            </div>
            <div className="item">
                <div className="carousel-main-content">
                    <CarouselCard 
                    carousPara="Ik heb de woninginformatie abonnement aangeschaft, aangezien ik een investeerder ben.
                    Het is voor mij nu heel makkelijk om per woning alle informatie te vinden + vergelijkbare woningen."
                    carousImage={carous3}
                    carousHeading="Bobby"
                    addressdata="#"
                    carousAnchorText="Utrecht"
                    />
                </div>
            </div>
            </OwlCarousel>
    );
}
export default ReviewsCarousel;