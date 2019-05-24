import React from "react";
import "../css/App.css";

function Item(props) {
  function onRemoveItem(e) {
    props.removeItem(props.data.id);
  }

  console.log(props.data);

  return (
    <div className="cart-item">
      <button className="remove-item" onClick={onRemoveItem}>
        -
      </button>
      <div className="item-quantity">{props.data.quantity}x</div>
      <div className="item-name">{props.data.title}</div>
      <div className="item-size">size {props.data.variant.title}</div>
      <div className="item-price">
        {props.data.variant.price.split(".")[0]}€
      </div>
    </div>
  );
}

export default Item;
