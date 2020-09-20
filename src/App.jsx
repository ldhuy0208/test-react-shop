import Axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, fetchPost } from "./actions";
import "./App.scss";
import Cart from "./component/QuantityVirus/Cart/Cart";
import Item from "./component/QuantityVirus/Item/Item";
import QuantityVirus from "./component/QuantityVirus/QuantityVirus";

export class App extends Component {
  state = {
    list: [
      {
        id: 1,
        avatar:
          "https://salt.tikicdn.com/cache/280x280/ts/product/e9/73/07/e0154a86d215c77d0151a7e991525be8.jpg",
        title: "Trò Chơi Boardgames Mèo Nổ (Dành Cho Người Lớn)",
        price: "68.000",
      },
      {
        id: 2,
        avatar:
          "https://salt.tikicdn.com/cache/280x280/ts/product/9a/6e/3e/04d24231cee5c5422be65061588be5b9.jpg",
        title: "Gói bột thông tắc hầm cầu M. phốt 300g Hando",
        price: "24.600",
      },
      {
        id: 3,
        avatar:
          "https://salt.tikicdn.com/cache/280x280/ts/product/9a/6e/3e/04d24231cee5c5422be65061588be5b9.jpg",
        title: "Gói bột thông tắc hầm cầu M. phốt 300g Hando",
        price: "24.600",
      },
      {
        id: 4,
        avatar:
          "https://salt.tikicdn.com/cache/280x280/ts/product/9a/6e/3e/04d24231cee5c5422be65061588be5b9.jpg",
        title: "Gói bột thông tắc hầm cầu M. phốt 300g Hando",
        price: "24.600",
      },
      {
        id: 5,
        avatar:
          "https://salt.tikicdn.com/cache/280x280/ts/product/9a/6e/3e/04d24231cee5c5422be65061588be5b9.jpg",
        title: "Gói bột thông tắc hầm cầu M. phốt 300g Hando",
        price: "24.600",
      },
      {
        id: 6,
        avatar:
          "https://salt.tikicdn.com/cache/280x280/ts/product/9a/6e/3e/04d24231cee5c5422be65061588be5b9.jpg",
        title: "Gói bột thông tắc hầm cầu M. phốt 300g Hando",
        price: "24.600",
      },
    ],

    selectedList: [],
  };

  onSelectItem = (item, quantity = 1) => {
    let updateSelectedList = [...this.state.selectedList];
    const searchItem = updateSelectedList.find(
      (selectedItem) => selectedItem.item.id === item.id
    );
    

    if (searchItem) searchItem.quantity += quantity;
    else updateSelectedList.push({ item: item, quantity: quantity });

    this.setState({ selectedList: updateSelectedList });
  };

  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <nav className="nav">
          <Cart
            selectedList={this.state.selectedList}
            total={this.state.selectedList.length}
          />
        </nav>
        <section className="list">
          {this.state.list.map((item) => (
            <Item key={item.id} onSelected={this.onSelectItem} item={item} />
          ))}
        </section>
      </div>
    );
  }
}

export default App;
