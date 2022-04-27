import React from "react";
// import "./Login.css"
const Searcher=()=>{
    return(
        <div className="container">
            <h2>Search Your Property</h2>
            <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Listing Search
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item active" href="#">Individual Search</a></li>
                    <li><a class="dropdown-item" href="#">Detail Search</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
        </div>
    );
}
export default Searcher;