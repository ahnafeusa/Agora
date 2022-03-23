import React, { useState } from "react";
import Cart from "../assets/cart.png";
import "../styles/SignIn.css";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function SignIn() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="signin">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Cart})` }}
      ></div>
      <div className="rightSide">
        <h1> Sign In</h1>

        <form id="contact-form">
          {/* <label htmlFor="name">Full Name</label> */}
          {/* <input name="name" placeholder="Enter full name..." type="text" /> */}
          <label htmlFor="username">Username</label>
          <input name="username" placeholder="Enter Username..." type="username" />
          <label htmlFor="password">Password</label>
          <input name="password" placeholder="Enter password..." type="password" />
          <div className="rightSide">
            <div>
            <Link to="/shop"> <button type="submit">Customer Sign In</button> </Link>
            <Link to="/additems"> <button type="submit">Seller Sign In</button> </Link>
            </div>
            
          </div>
          {/* <div><button type="submit">Customer Sign In</button> <a>  </a>
          <button type="submit">Seller Sign In</button></div> */}

        </form>
      </div>
    </div>
  );
}

export default SignIn;
