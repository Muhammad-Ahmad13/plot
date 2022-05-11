import React from "react";
import "./Worthy.css";
import WorthyCard from "./WorthyCard";
const Worthy=()=>{
    return( 
        <div className="Worthy-main">
            <h4>
                At vero eos et accusamus et iusto odio dignissimos
            </h4>
            <div className="Worthy-sec">
                <div className="Worthy-content">
                    <WorthyCard
                    data="100%"
                    description="Lorem ipsum dolor."
                    />
                </div>
                <div className="Worthy-content">
                   <WorthyCard
                    data="100,000"
                    description="Lorem ipsum dolor."
                    />
                </div>
                <div className="Worthy-content">
                   <WorthyCard
                    data="1500"
                    description="Lorem ipsum dolor."
                    />  
                </div>
                <div className="Worthy-content">
                  <WorthyCard
                    data="95%"
                    description="Lorem ipsum dolor."
                    />
                </div>
                <div className="Worthy-content">
                   <WorthyCard
                    data="1500+"
                    description="Lorem ipsum dolor."
                    />
                </div>
                <div className="Worthy-content">
                   <WorthyCard
                    data="200+"
                    description="Lorem ipsum dolor."
                    /> 
                </div>
            </div>
        </div>
    );
}
export default Worthy;