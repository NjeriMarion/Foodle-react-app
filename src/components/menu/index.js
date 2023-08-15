import React from "react";
import './style.css'

const Menu = () =>{
    return(
        <div>
            <ul className="best">
                <li>
                    <h2>Best <span>Delivered</span> <br/> Categories</h2>
                    <p>Here are some of our best distributed<br/>  categories. If your want you can order <br/> from here.</p>
                </li>
            </ul>
            <ul className="chicken">
                <div>
                    <img src={process.env.PUBLIC_URL + '/burger.jpeg'} alt="burger" className="burger" />
                    <h3>Chicken Burger</h3>
                    <p>Order Now </p>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/pizza.jpeg'} alt="burger"  className="pizza"/>
                    <h3>Chicken pizza</h3>
                    <p>Order Now </p>
                </div>
                <div id="fries">
                    <img src={process.env.PUBLIC_URL + '/fries.jpeg'} alt="burger" className="fries"/>
                    <h3>French fries</h3>
                    <p>Order Now </p>
                </div>
            </ul>
            <ul className="reg">
                <li>
                    <h2>Our <span>Delivered</span> Menu</h2>
                    <p>These are our regular Menus. You can <br/>order anything you like.</p>
                </li>
                <li>
                    <button id="buy">See_All</button>
                </li>
            </ul>
            <ul className="del">
                <div>
                    <img src={process.env.PUBLIC_URL + '/chickenBurger.jpeg'} alt="burger"  className="image"/>
                    <h3>Chicken Burger</h3>
                    <p>Order Now </p>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/chickenBurger.jpeg'} alt="burger"  className="image"/>
                    <h3>Chicken Burger</h3>
                    <p>Order Now </p>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/chickenBurger.jpeg'} alt="burger"  className="image"/>
                    <h3>Chicken Burger</h3>
                    <p>Order Now </p>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/chickenBurger.jpeg'} alt="burger"  className="image"/>
                    <h3>Chicken Burger</h3>
                    <p>Order Now </p>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/chickenBurger.jpeg'} alt="burger"  className="image"/>
                    <h3>Chicken Burger</h3>
                    <p>Order Now </p>
                </div> <div>
                    <img src={process.env.PUBLIC_URL + '/chickenBurger.jpeg'} alt="burger"  className="image"/>
                    <h3>Chicken Burger</h3>
                    <p>Order Now </p>
                </div>

            </ul>
        </div>
    )
}
export default Menu