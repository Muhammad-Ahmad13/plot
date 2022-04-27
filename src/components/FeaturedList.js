import React from "react";
import "./PropertyData.css"

import PropertyData from "./PropertyData";
const FeaturedList=(props)=>{
    return(
        <section>
            <div className="container feature-main">
                <h3>Property List</h3>
                <div className="feature-data">
                    <PropertyData 
                    className ="property-content"
                    imagesrc=""
                    property_title="Khasmir"
                    property_descrip = "Lorem ipsum dolor sit amet consectetur elit. Molestias, facere quos? Harum,esse? Quibusdam earum veritatis consequatur voluptatibus mollitia. Dolorum, non suscipit inventore ipsam voluptatum nam nostrum aliquid?"
                    linkdetail ="https://www.google.com/"
                    />
                    <PropertyData 
                    className ="property-content"
                    imagesrc=""
                    property_title="Sindh"
                    property_descrip = "Lorem ipsum dolor sit amet consectetur elit. Molestias, facere quos? Harum,esse? Quibusdam earum veritatis consequatur voluptatibus mollitia. Dolorum, non suscipit inventore ipsam voluptatum nam nostrum aliquid?"
                    linkdetail ="https://www.google.com/"
                    />
                    <PropertyData 
                    className ="property-content"
                    imagesrc=""
                    property_title="Balochistan"
                    property_descrip = "Lorem ipsum dolor sit amet consectetur elit. Molestias, facere quos? Harum,esse? Quibusdam earum veritatis consequatur voluptatibus mollitia. Dolorum, non suscipit inventore ipsam voluptatum nam nostrum aliquid?"
                    linkdetail ="https://www.google.com/"
                    />
                    <PropertyData 
                    className ="property-content"
                    imagesrc=""
                    property_title="Karachi"
                    property_descrip = "Lorem ipsum dolor sit amet consectetur elit. Molestias, facere quos? Harum,esse? Quibusdam earum veritatis consequatur voluptatibus mollitia. Dolorum, non suscipit inventore ipsam voluptatum nam nostrum aliquid?"
                    linkdetail ="https://www.google.com/"
                    />
                </div>
            </div>
        </section>
    );
   / *comment added*/
}  
export default FeaturedList;