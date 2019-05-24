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
    <div>
      <img
        className="product-img"
        alt={props.data.title + " image"}
        src={props.data.images[0].src}
      />
      <h2>{props.data.title}</h2>
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

      <button onClick={addItem}>Add to cart</button>
    </div>
  );
}

export default Product;
