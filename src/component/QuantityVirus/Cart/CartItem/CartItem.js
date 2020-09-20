import React from "react";
import "./CartItem.scss";

function CartItem(props) {
  return (
    <div className="cart-item">
      <p className="cart-item__title">{props.item.title}</p>
      <span className="cart-item__quantity">{props.quantity}</span>
    </div>
  );
}

export default CartItem;
