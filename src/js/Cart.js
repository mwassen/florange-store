/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "../css/App.css";
import Item from "./Item";

function Cart(props) {
  return (
    <div>
      {/* <video className="bg-vid" autoPlay playsInline loop={true} muted>
        <source src={props.videosrc} type="video/webm" />
      </video> */}
      <div className="modal-header" />

      {props.checkout && props.checkout.lineItems.length > 0 ? (
        <div>
          <div className="cart-contents">
            {props.checkout.lineItems.map(item => {
              return (
                <Item data={item} removeItem={props.removeItem} key={item.id} />
              );
            })}
          </div>
          <div className="modal-footer">
            <div className="total-price">
              total: {props.checkout && props.checkout.totalPrice.split(".")[0]}
              €
            </div>
            <div className="checkout-btn" onClick={props.openShopify}>
              check out
            </div>
          </div>
        </div>
      ) : (
        <div>your cart is empty</div>
      )}
    </div>
  );
}

export default Cart;
