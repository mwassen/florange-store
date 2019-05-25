/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Product from "./Product";
import Item from "./Item";
import Modal from "react-modal";
import logo from "../assets/logo.png";
import { useSpring, animated } from "react-spring";
// import poolBg from "../assets/poolbg.png";
import waterBg from "../assets/waterbg.webm";
import mswsn from "../assets/mswsn-logo.svg";

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
  }, [props.client.product]);

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
  }, [props.client.checkout, checkoutId]);

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
        <footer className="App-footer">
          <a href="https://mswsn.io" target="_blank" rel="noopener noreferrer">
            <div className="made-by-footer" style={fade}>
              <div className="site-by">site by</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 104 18.5"
                className="mswsn-logo"
              >
                <path
                  class="cls-1"
                  d="M17.5,0h-3a1,1,0,0,0-1,1V3.5a1,1,0,0,1-1,1h-2a1,1,0,0,1-1-1V1a1,1,0,0,0-1-1h-3a1,1,0,0,0-1,1V3.5a1,1,0,0,1-1,1H1a1,1,0,0,0-1,1v12a1,1,0,0,0,1,1H4a1,1,0,0,0,1-1V6A1,1,0,0,1,6,5H8A1,1,0,0,1,9,6V8.5a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V6a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V17.5a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V5.5a1,1,0,0,0-1-1H19.5a1,1,0,0,1-1-1V1A1,1,0,0,0,17.5,0Z"
                />
                <path
                  class="cls-1"
                  d="M62,13.5H60a1,1,0,0,1-1-1V10a1,1,0,0,0-1-1H55a1,1,0,0,0-1,1v2.5a1,1,0,0,1-1,1H51a1,1,0,0,1-1-1V1a1,1,0,0,0-1-1H46a1,1,0,0,0-1,1V13a1,1,0,0,0,1,1h2.5a1,1,0,0,1,1,1v2.5a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v2.5a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V15a1,1,0,0,1,1-1H67a1,1,0,0,0,1-1V1a1,1,0,0,0-1-1H64a1,1,0,0,0-1,1V12.5A1,1,0,0,1,62,13.5Z"
                />
                <path
                  class="cls-1"
                  d="M28,9.5h3a1,1,0,0,0,1-1V6a1,1,0,0,1,1-1h7a1,1,0,0,0,1-1V1a1,1,0,0,0-1-1H28a1,1,0,0,0-1,1V8.5A1,1,0,0,0,28,9.5Z"
                />
                <path
                  class="cls-1"
                  d="M35,13.5H28a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1H40a1,1,0,0,0,1-1V10a1,1,0,0,0-1-1H37a1,1,0,0,0-1,1v2.5A1,1,0,0,1,35,13.5Z"
                />
                <path
                  class="cls-1"
                  d="M99.5,3.5V1a1,1,0,0,0-1-1H91a1,1,0,0,0-1,1V17.5a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V6a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V17.5a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V5.5a1,1,0,0,0-1-1h-2.5A1,1,0,0,1,99.5,3.5Z"
                />
                <path
                  class="cls-1"
                  d="M73,9.5h3a1,1,0,0,0,1-1V6a1,1,0,0,1,1-1h7a1,1,0,0,0,1-1V1a1,1,0,0,0-1-1H73a1,1,0,0,0-1,1V8.5A1,1,0,0,0,73,9.5Z"
                />
                <path
                  class="cls-1"
                  d="M80,13.5H73a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1H85a1,1,0,0,0,1-1V10a1,1,0,0,0-1-1H82a1,1,0,0,0-1,1v2.5A1,1,0,0,1,80,13.5Z"
                />
              </svg>
            </div>
          </a>
        </footer>
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
