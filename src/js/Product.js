/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Variant from "./Variant";
import { useSpring, animated } from "react-spring";
import "../css/App.css";

function Product(props) {
  const [selectVariant, setSelectVariant] = useState(props.data.variants[0]);

  const [fade, setFade] = useSpring(() => ({
    config: { friction: 66 },
    opacity: 0
  }));

  function handleSizeChange(newSize) {
    setSelectVariant(newSize);
  }

  function addItem() {
    props.cart(selectVariant.id);
  }

  return (
    <animated.div className="product" style={fade}>
      <img
        className="product-img"
        alt={props.data.title + " image"}
        src={props.data.images[0].src}
        onLoad={() => {
          setFade({ opacity: 1 });
        }}
      />
      <div className="product-details">
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
            sold out
            {/* <span role="img" aria-label="skull emoji">
            💀
          </span> */}
          </div>
        )}
      </div>
    </animated.div>
  );
}

export default Product;
