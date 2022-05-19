import React from "react";
import OwlCarousel from "react-owl-carousel";
import "./Testimonial.css"
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "owl.carousel/dist/assets/owl.theme.default.min.css"
import TestimonialCard from "./TestimonialCard";
import test1 from "../../../assets/images/test1.jpg"
import test2 from "../../../assets/images/test2.jpg"
import test3 from "../../../assets/images/test3.jpg"
import face from "../../../assets/images/face-icon.png"
import insta from "../../../assets/images/insta-icon.png"
import teiter from "../../../assets/images/twitter-icon.png"
const options ={
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: false,
    loop:true,
    // navText: ["Prev", "Next"],
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
const Testimonial=()=>{
    return(
        <div className="owl-sec">
            <div className="owl-main">

                <div className="client-content">
                    <h3>
                        Client Testimonials
                    </h3>
                    <p>
                    Wat een geweldige website!
                ik heb een abonnement genomen bij Plotcore met mijn partner omdat we op zoek waren naar een woning.
                Door de dagelijkse lijsten met koopwoningen die ik ontvang over heel Nederland heb ik er geen last meer
                    van om tussen de bezichtigingen te komen. Ik ben er nu als een van de eerste bij."
                    </p>
                </div>
            <div className="owl-data">
            <OwlCarousel
            className="owl-theme"
            {...options}
            >
                <div className="item">
                <TestimonialCard
                testimg={test1}
                testtitle="Brian"
                testdesp="Wat een geweldige website!
                ik heb een abonnement genomen bij Plotcore met mijn partner omdat we op zoek waren naar een woning.
                Door de dagelijkse lijsten met koopwoningen die ik ontvang over heel Nederland heb ik er geen last meer
                    van om tussen de bezichtigingen te komen. Ik ben er nu als een van de eerste bij."
                testicon1={face}
                testicon2={insta}
                testicon3={teiter}
                />
                </div>
                <div className="item">
                    <TestimonialCard
                    testimg={test2}
                    testtitle="Sanne"
                    testdesp="Heel blij met de kennis van Plotcore. Dankzij de gepersonaliseerde lijsten van Koopwoningen in
                    combinatie met de waarde rapporten hadden we een idee van wat een woning waard is. We hebben na een lange
                    huizenjacht uiteindelijk met een korte tijd via Plotcore een winnend bod
                    uit kunnen brengen. De taxatiewaarde bleek ook overeen te komen met de waarde en ons bod. Heel fijn.
                    Wij raden starters service van Plotcore zeker aan!"
                    testicon1={face}
                    testicon2={insta}
                    testicon3={teiter}
                    />
                </div>
                <div className="item">
                    <TestimonialCard
                    testimg={test3}
                    testtitle="Esteban"
                    testdesp="Dankzij de startersservice en het dashboard van Plotcore hebben wij
                    zelfstandig een scherp bod kunnen uitbrengen. En hebben we na 3 weken zoeken als starters in Utrecht stad een mooie
                    benedenwoning kunnen kopen met grote tuin!"
                    testicon1={face}
                    testicon2={insta}
                    testicon3={teiter}
                    />
                </div>
                {/* <div className="item">
                    <TestimonialCard
                    testimg={test1}
                    testtitle="Brian"
                    testdesp="Wat een geweldige website!
                    ik heb een abonnement genomen bij Plotcore met mijn partner omdat we op zoek waren naar een woning.
                    Door de dagelijkse lijsten met koopwoningen die ik ontvang over heel Nederland heb ik er geen last meer van om tussen de bezichtigingen
                    te komen. Ik ben er nu als een van de eerste bij."
                    testicon1={face}
                testicon2={insta}
                testicon3={teiter}
                    />
                </div>
                <div className="item">
                    <TestimonialCard
                    testimg={test2}
                    testtitle="Sanne"
                    testdesp="Heel blij met de kennis van Plotcore. Dankzij de gepersonaliseerde lijsten van Koopwoningen in combinatie met de waarde rapporten
                    hadden we een idee van wat een woning waard is. We hebben na een lange huizenjacht uiteindelijk met een korte tijd via Plotcore een winnend
                    bod uit kunnen brengen.
                    De taxatiewaarde bleek ook overeen te komen met de waarde en ons bod. Heel fijn. Wij raden starters service van Plotcore zeker aan!"
                    testicon1={face}
                    testicon2={insta}
                    testicon3={teiter}
                    />
                </div>
                <div className="item">
                    <TestimonialCard
                    testimg={test3}
                    testtitle="Esteban"
                    testdesp="Dankzij de startersservice en het dashboard van Plotcore hebben wij
                    zelfstandig een scherp bod kunnen uitbrengen. En hebben we na 3 weken zoeken als starters in Utrecht stad een mooie benedenwoning
                    kunnen kopen met grote tuin!"
                    testicon1={face}
                    testicon2={insta}
                    testicon3={teiter}
                    />
                </div> */}
            </OwlCarousel>
            </div>
            </div>
        </div>
    );
}
export default Testimonial;