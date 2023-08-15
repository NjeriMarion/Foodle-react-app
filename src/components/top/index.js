import React from "react";
import './style.css'

const Top = () =>{
    return(
        <div className="top">
            <ul className="one">
                <li>
                    <h2>All fast food <br/> available at Foodle</h2>
                    <p>We Are Just A Click Away When You <br/> Crave For Delicious Fast Food.</p>
                    <button id="buy">Buy Now</button>
                    <button id="how">How To Order</button>
                </li>
                <li>
                    <img src={process.env.PUBLIC_URL + '/sandwich.png'} alt="sandwich" />
                </li>
            </ul>
            <ul className="two">
                <div>
                    <h3>Fast Delivery</h3>
                    <p>The food will be delivered to <br/> your bome within 1-2 Hours of <br/> your ordering</p>
                </div>
                <div>
                    <h3>Fresh food</h3>
                    <p>The food will be delivered to <br/> your bome within 1-2 Hours of <br/> your ordering</p>
                </div>
                <div>
                    <h3>Free Delivery</h3>
                    <p>The food will be delivered to <br/> your bome within 1-2 Hours of <br/> your ordering</p>
                </div>
        
            </ul>
        </div>
    )
}
export default Top