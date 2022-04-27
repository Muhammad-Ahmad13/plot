import React from "react";
import StarterHeader from "./StarterHeader";
import StarterWrapper from "./StarterWrapper";
import "./StarterHead.css";
const StarterHead=()=>{
    return(
        <div className="head-main">
            <StarterHeader></StarterHeader>
            <StarterWrapper></StarterWrapper>
        </div>
    );
}
export default StarterHead;