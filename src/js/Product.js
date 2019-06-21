/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Variant from "./Variant";
import { useSpring, animated } from "react-spring";
import "../css/App.scss";
import Select from "react-select";

function Product(props) {
  const [selectVariant, setSelectVariant] = useState(null);

  const [fade, setFade] = useSpring(() => ({
    config: { friction: 66 },
    opacity: 0
  }));

  useEffect(() => {
    // console.log(props.data.variants);
    if (props.data.variants.length === 1) {
      setSelectVariant(props.data.variants[0]);
    }
  }, [props.data.variants]);

  function handleSizeChange(newSize) {
    setSelectVariant(newSize);
  }

  function addItem() {
    props.cart(selectVariant.id);
  }

  function openSlides(e) {
    props.openSlideShow(props.data);
  }

  function createSelect(variants) {
    return variants.map(variant => {
      return {
        value: variant,
        label: variant.title
      };
    });
  }

  return (
    <animated.div className="product" style={fade}>
      <img
        className="product-img"
        alt={props.data.title + " image"}
        src={selectVariant ? selectVariant.image.src : props.data.images[0].src}
        onClick={openSlides}
        onLoad={() => {
          setFade({ opacity: 1 });
        }}
      />
      <div className="product-details">
        <div className="product-name">{props.data.title}</div>
        {props.data.description !== "" && (
          <div className="product-description">{props.data.description}</div>
        )}
        <div className="product-price">
          {props.data.variants[0].price.split(".")[0]}€
        </div>
        {props.data.variants[0].title !== "Default Title" && (
          <div>
            {props.data.variants.length < 7 ? (
              <div className="product-variants-inline">
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
            ) : (
              <div className="product-variants-dropdown">
                <Select
                  className="sizeSelect"
                  options={createSelect(props.data.variants)}
                  width={900}
                  isClearable={false}
                  isSearchable={false}
                  onChange={option => {
                    if (option !== null) setSelectVariant(option.value);
                  }}
                />
              </div>
            )}
          </div>
        )}
        {selectVariant ? (
          selectVariant.available ? (
            <div className="add-to-cart" onClick={addItem}>
              add to cart
            </div>
          ) : (
            <div className="sold-out">
              <span role="img" aria-label="skull emoji">
                💀
              </span>
              sold out
            </div>
          )
        ) : (
          <div className="add-to-cart-noselect" onClick={addItem}>
            select size
          </div>
        )}
      </div>
    </animated.div>
  );
}

export default Product;
