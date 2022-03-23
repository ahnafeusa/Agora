import React from "react";

function ShopItem({ image, name, price }) {
  return (
    <div className="shopItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
    </div>
  );
}

export default ShopItem;
