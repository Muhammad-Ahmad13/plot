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
                kunPara="Wat andere woningzoekers zeggen over Plotcore"
            />
            <ReviewsCarousel />
           </div>
       </div> 
    );
}
export default ReviewsMain;