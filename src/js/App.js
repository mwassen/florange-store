/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Product from "./Product";
import Item from "./Item";
import Modal from "react-modal";
import logo from "../assets/logo.png";
import { useSpring, animated } from "react-spring";
// import poolBg from "../assets/poolbg.png";
import waterBg from "../assets/waterbg.webm";

import "../css/App.css";

function App(props) {
  const [products, setProducts] = useState([]);
  const [checkoutId, setCheckoutId] = useState(
    localStorage.getItem("checkoutId")
  );
  const [cartModal, setCartModal] = useState(false);
  const [currentCheckout, setCurrentCheckout] = useState();

  const [fade, setFade, stop] = useSpring(() => ({
    config: { friction: 66 },
    opacity: 0
  }));

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await props.client.product.fetchAll();
      setProducts(result);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (checkoutId == null) {
      // console.log("creating new cart");
      props.client.checkout.create().then(checkout => {
        localStorage.setItem("checkoutId", checkout.id);
        setCurrentCheckout(checkout);
        setCheckoutId(checkout.id);
      });
    } else {
      // console.log("loading existing cart");
      props.client.checkout
        .fetch(checkoutId)
        .then(checkout => {
          setCurrentCheckout(checkout);
        })
        .catch(error => {
          props.client.checkout.create().then(checkout => {
            localStorage.setItem("checkoutId", checkout.id);
            setCheckoutId(checkout.id);
          });
        });
    }
  }, []);

  function addToCart(variant) {
    const lineItemsToAdd = {
      variantId: variant,
      quantity: 1
    };

    props.client.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then(checkout => {
        setCurrentCheckout(checkout);
      });
  }

  function removeFromCart(variant) {
    const lineItemIdsToRemove = [variant];

    props.client.checkout
      .removeLineItems(checkoutId, lineItemIdsToRemove)
      .then(checkout => {
        setCurrentCheckout(checkout);
      });
  }

  function openShopifyCart(e) {
    props.client.checkout.fetch(checkoutId).then(checkout => {
      if (checkout.lineItems.length > 0) window.open(checkout.webUrl);
    });
  }

  function openCart(e) {
    setCartModal(true);
  }

  function closeCart() {
    setCartModal(false);
  }

  return (
    <div className="container">
      {/* <img className="bg-img" src={poolBg} /> */}
      <animated.video
        className="bg-vid"
        autoPlay
        loop={true}
        muted
        style={fade}
        onCanPlayThrough={() => {
          setFade({ opacity: 1 });
        }}
      >
        <source src={waterBg} type="video/webm" />
      </animated.video>
      <Modal
        isOpen={cartModal}
        onRequestClose={closeCart}
        appElement={document.getElementById("App")}
        className="Modal"
        overlayClassName="Overlay"
        closeTimeoutMS={200}
      >
        <video className="bg-vid" autoPlay loop={true} muted>
          <source src={waterBg} type="video/webm" />
        </video>
        <div className="modal-header" />

        {currentCheckout && currentCheckout.lineItems.length > 0 ? (
          <div>
            <div className="cart-contents">
              {currentCheckout.lineItems.map(item => {
                return (
                  <Item data={item} removeItem={removeFromCart} key={item.id} />
                );
              })}
            </div>
            <div className="modal-footer">
              <div className="total-price">
                total:{" "}
                {currentCheckout && currentCheckout.totalPrice.split(".")[0]}€
              </div>
              <div className="checkout-btn" onClick={openShopifyCart}>
                check out
              </div>
            </div>
          </div>
        ) : (
          <div>your cart is empty</div>
        )}
        <div className="close-modal" onClick={closeCart}>
          back
        </div>
      </Modal>

      <div id="App">
        <header className="App-header">
          <animated.img
            src={logo}
            className="florange-logo"
            alt="logo"
            style={fade}
          />
        </header>

        {products.map(product => {
          return (
            <Product
              key={product.id}
              data={product}
              cart={addToCart}
              // images={product.images}
              // title={product.title}
              // price={}
            />
          );
        })}
        <footer className="App-footer" />
        <div className="shopping-cart" onClick={openCart}>
          Cart
        </div>
        <div className="contact-links">
          <a
            href="https://www.instagram.com/florangedesign/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a href="mailto:someone@yoursite.com">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default App;
