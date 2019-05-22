import React, { useState, useEffect } from "react";
import "../css/App.css";

function Product(props) {
  console.log(props.data);

  return (
    <div>
      <img className="product-img" src={props.data.images[0].src} />
      <h2>{props.data.title}</h2>
      <div className="product-price">{props.data.variants[0].price}€</div>
      <button>Add to cart</button>
    </div>
  );
}

export default Product;
