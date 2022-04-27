import React from "react";
import "./PropertyData.css"
const PropertyData=(props)=>{
    console.log(props)
    return(
        <section>
            <div className="cards">
                <div>
                    <div className="card-image">
                        <img src={props.imagesrc} alt="property image"/>
                    </div>
                    <h4>{props.property_title}</h4>
                    <p>{props.property_descrip}</p>
                    <div className="card-anc">
                        <a href={props.linkdetail}>Detail</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default PropertyData;