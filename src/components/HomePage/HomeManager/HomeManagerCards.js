import React from "react";
import ManagerCard from "./ManagerCard";
import "./HomeManagerCards.css"
import company1 from "../../../assets/images/comp-1.png";
import company2 from "../../../assets/images/comp-2.png";
import company3 from "../../../assets/images/comp-3.png";
import company4 from "../../../assets/images/comp-4.png";

const HomeManagerCards = () =>{
    return(
        <div className="homecard-main">
            <div className="container">
                <div className="homecard-sec">
                    <div className="homecard-content mt-3">
                        <ManagerCard
                        manageImage={company1}
                        managerPara="Lorem ipsum trir bedade huruvida prossade esa"
                        />
                    </div>
                    <div className="homecard-content">
                        <ManagerCard
                        manageImage={company2}
                        managerPara="Lorem ipsum trir bedade huruvida prossade esa"
                        />
                    </div>
                    <div className="homecard-content">
                        <ManagerCard
                        manageImage={company3}
                        managerPara="Lorem ipsum trir bedade huruvida prossade esa"
                        />
                    </div>
                    <div className="homecard-content">
                        <ManagerCard
                        manageImage={company4}
                        managerPara="Lorem ipsum trir bedade huruvida prossade esa"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomeManagerCards;