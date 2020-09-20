import React, { Component } from "react";
import "./Item.scss";

export class Item extends Component {
  render() {
    const { title, id, price, avatar} = this.props.item;
    return (
      <div className="item">
        <img className="item__photo" src={avatar} />
        <p className="item__title">{title}</p>
        <span className="item__price">{price}</span>
        <button onClick={() => this.props.onSelected(this.props.item)} className="btn">
          Mua
        </button>
      </div>
    );
  }
}

export default Item;
