import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/ShoppingBanner.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> AGORA </h1>
        <p> Your local marketplace online.</p>
        <Link to="/shop">
          <button> Shop Now </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
