import React from "react";
import FeatureCard from "./FeatureCard";
import "./FeaturesSec.css";
import feat1 from "../../../assets/images/feature1.png";
import feat2 from "../../../assets/images/feature2.png";
import feat3 from "../../../assets/images/feature3.png";
import feat4 from "../../../assets/images/feature4.png";
import feat5 from "../../../assets/images/feature5.png";
import feat6 from "../../../assets/images/feature6.png";
const FeaturesSec=()=>{
    return(
        <div className="FeatureSec-main">
            <h4>
                More Features
            </h4>
            <div className="Feature-Sec">
                <div className="FeatureSec-content">
                    <FeatureCard
                    ficon={feat1}
                    data ="Feature#1"
                    description="Lorem ipsum dolor sit amet etur adipiscing elit, sed do eiusmpor."
                    />
                </div>
                <div className="FeatureSec-content">
                <FeatureCard
                    ficon={feat2}
                    data ="Feature#2"
                    description="Lorem ipsum dolor sit amet etur adipiscing elit, sed do eiusmpor."
                    />
                </div>
                <div className="FeatureSec-content">
                <FeatureCard
                    ficon={feat3}
                    data ="Feature#3"
                    description="Lorem ipsum dolor sit amet etur adipiscing elit, sed do eiusmpor."
                    />
                </div>
                <div className="FeatureSec-content">
                <FeatureCard
                    ficon={feat4}
                    data ="Feature#4"
                    description="Lorem ipsum dolor sit amet etur adipiscing elit, sed do eiusmpor."
                    />
                </div>
                <div className="FeatureSec-content">
                <FeatureCard
                    ficon={feat5}
                    data ="Feature#5"
                    description="Lorem ipsum dolor sit amet etur adipiscing elit, sed do eiusmpor."
                    />
                </div>
                <div className="FeatureSec-content">
                <FeatureCard
                    ficon={feat6}
                    data ="Feature#6"
                    description="Lorem ipsum dolor sit amet etur adipiscing elit, sed do eiusmpor."
                    />
                </div>
            </div>
            <div className="FeatureSec-anc">
                <a href="#">LEARN MORE</a>
            </div>
        </div>
    );
}
export default FeaturesSec;