/* eslint-disable no-unused-vars */
import React from "react";
import "../css/App.css";

function Item(props) {
  function onRemoveItem(e) {
    props.removeItem(props.data.id);
  }

  return (
    <div className="cart-item">
      <div className="remove-item" onClick={onRemoveItem}>
        X
      </div>
      <div className="item-quantity">{props.data.quantity}x</div>
      <img
        className="item-image"
        src={props.data.variant.image.src}
        alt={"photo of " + props.data.title}
      />
      <div className="item-name">{props.data.title}</div>
      {props.data.variant.title !== "Default Title" && (
        <div className="item-size">size {props.data.variant.title}</div>
      )}
      <div className="item-price">
        {props.data.variant.price.split(".")[0]}€
      </div>
    </div>
  );
}

export default Item;
