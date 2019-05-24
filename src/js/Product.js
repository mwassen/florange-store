/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Variant from "./Variant";
import "../css/App.css";

function Product(props) {
  const [selectVariant, setSelectVariant] = useState(props.data.variants[0]);

  function handleSizeChange(newSize) {
    setSelectVariant(newSize);
  }

  function addItem() {
    props.cart(selectVariant.id);
  }

  return (
    <div className="product">
      <img
        className="product-img"
        alt={props.data.title + " image"}
        src={props.data.images[0].src}
      />
      <div className="product-name">{props.data.title}</div>
      <div className="product-price">
        {props.data.variants[0].price.split(".")[0]}€
      </div>
      {props.data.variants[0].title !== "Default Title" && (
        <div className="product-variants">
          {props.data.variants.map(variant => {
            return (
              <Variant
                selected={selectVariant}
                data={variant}
                onVariantClick={handleSizeChange}
                key={variant.id}
              />
            );
          })}
        </div>
      )}
      {selectVariant.available ? (
        <div className="add-to-cart" onClick={addItem}>
          add to cart
        </div>
      ) : (
        <div className="sold-out">
          <span role="img" aria-label="skull emoji">
            💀
          </span>
          sold out{" "}
          <span role="img" aria-label="skull emoji">
            💀
          </span>
        </div>
      )}
    </div>
  );
}

export default Product;
