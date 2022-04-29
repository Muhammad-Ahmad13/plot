import React from "react";
import Kunnen from "../Kunnen/Kunnen";
import ReviewsCarousel from "./ReviewsCarousel";
import "./ReviewSec.css";
const ReviewsMain = () =>{
    return(
       <div className="review-main">
           <div className="container">
           <Kunnen
                kunHead="Reviews"
                kunPara="Lorem ipsum georening bukoska vaben. Dogyns eurong.
                Povisovis josm, emedan semis. Harat rar par."
            />
            <ReviewsCarousel />
           </div>
       </div> 
    );
}
export default ReviewsMain;