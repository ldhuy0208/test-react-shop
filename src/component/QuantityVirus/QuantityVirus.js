import React from "react";
import "./QuantityVirus.scss";

function QuantityVirus({ imgLink, total, label }) {
  return (
    <div className="quantity-virus">
      <img src={imgLink} />
      <span className="quantity-virus__total">{total.toLocaleString()}</span>
      <label className="quantity-virus__label">{label}</label>
    </div> 
  );
}

export default QuantityVirus;
