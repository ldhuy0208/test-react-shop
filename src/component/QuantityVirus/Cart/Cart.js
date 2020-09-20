import React, { useEffect, useRef, useState } from "react";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem";

function Cart(props) {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setShow(false);
      }
    });
  }, []);

  return (
    <div className="cart">
      <span className="cart__icon" onClick={() => setShow(!show)}>
        <span className="cart__total">{props.total}</span>
        <i className="fas fa-shopping-cart"></i>
      </span>

      {show && (
        <div className="cart__dropdown" ref={dropdownRef}>
          {props.selectedList.map((selectedItem) => (
            <CartItem
              key={selectedItem.item.id}
              item={selectedItem.item}
              quantity={selectedItem.quantity}
            />
          ))}
        </div>
      )}
      {false}
    </div>
  );
}

export default Cart;
