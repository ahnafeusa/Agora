import React from 'react'
import { CartList } from "../helpers/CartList";
import CartItem from "../components/CartItem";
import "../styles/Cart.css";

function Cart() {
    return (
        <div className="cart">
          <h1 className="cartTitle">Cart</h1>
          <div className="cartList">
            {CartList.map((cartItem, key) => {
              return (
                <CartItem
                  key={key}
                  image={cartItem.image}
                  name={cartItem.name}
                  price={cartItem.price}
                  quantity={cartItem.quantity}
                />
              );
            })}
          </div>
        </div>
      );
}

export default Cart