import React from "react";
import "./IndividualSearch.css"
const IndividualSearch=()=>{
    return(
       <div className="container">
           <form>
               <div class="form-data d-flex justify-content-between">
                    <div class="formcollect">
                        <label>Name</label>
                        <input type="text" placeholder="Enter Your Name"/>
                    </div>
                    <div class="formcollect">
                        <label>Enter Your location</label>
                        <input type="text" placeholder="Location"/>
                    </div>
                    <div class="formcollect">
                        <label>Min Price</label>
                        <input type="number" placeholder="Minimum Price"/>
                    </div>
                    <div class="formcollect">
                        <label>Max Price</label>
                        <input type="number" placeholder="Maximun Price"/>
                    </div>
                    <div class="formcollect-anc">
                        <a href="#">Search</a>
                    </div>
                </div>
           </form>
       </div>
    );
}
export default IndividualSearch;