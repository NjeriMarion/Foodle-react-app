import React from "react";
import './style.css'

const Navigation = () =>{
    return(
        <div className="nav">
            <h3>Foodle</h3>
            <ul id="middle">
                <li id="home">Home</li>
                <li>Offer</li>
                <li>Service</li>
                <li>Menu</li>
                <li>About Us</li>
            </ul>
            <ul>
            <button id="login">Login</button>
            <button id="signup">Sign Up</button>
            </ul>


        </div>
    )
}
export default Navigation