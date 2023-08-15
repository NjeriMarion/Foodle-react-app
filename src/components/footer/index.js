import React from 'react';
import './style.css'

function Footer() {
return (
<div className="footer-container">
<div className="food-icons">
<div className="food">
<span>Foodish</span>
<p>Continue Foodish 2023 all rights reserved</p>
</div>
<div className="icons">
<span>Follow Us On</span>
</div>
</div>

<div className="information">
<span>Information</span>
<ul>
<li>Menu</li>
<li>Quality</li>
<li>Make a Choice</li>
<li>Salad With Vegetable</li>
<li>Fast Delivery</li>
<li>Subscribe</li>
</ul>
</div>

<div className="menue">
<span>Menu</span>
<ul>
<li>Home</li>
<li>Offers</li>
<li>Services</li>
<li>About Us</li>
</ul>
</div>

<div className="contact">
<span>Contact</span>
<ul>
<li>+123 456 7890</li>
<li>Explore</li>
<li>info@foodish.Com</li>
<li>1244, New York, USA</li>
</ul>
</div>
</div>
);
}

export default Footer;