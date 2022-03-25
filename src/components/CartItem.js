import React from "react";

function CartItem({ image, name, price, quantity }) {
  return (
    <div className="cartItem">
      <div style={{ backgroundImage: `url(${image})` }}>
        <p> </p>
        <h1> {name} </h1>
        <p> ${price} </p>
        <p> {quantity}</p>
      </div>

    </div>
  );
}

export default CartItem;
