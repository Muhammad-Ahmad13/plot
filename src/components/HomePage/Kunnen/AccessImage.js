import React from "react";
import "./AccessImage.css";
import accessImage from "../../../assets/images/accessimage.png";
const AccessImage = () =>{
    return(
        <div className="aceessimage-main">
            <div className="accessimage-img">
                <img src={accessImage} alt="image_access"/>
            </div>
        </div>
    );
}
export default AccessImage;