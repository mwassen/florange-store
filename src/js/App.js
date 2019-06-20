/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Product from "./Product";
import Item from "./Item";
import Cart from "./Cart";
import Modal from "react-modal";
import logo from "../assets/logo.png";
import { useSpring, animated } from "react-spring";
import waterBg from "../assets/waterbg.mp4";
import "../css/App.scss";
import SlideShow from "./SlideShow";

function App(props) {
  const [products, setProducts] = useState([]);
  const [checkoutId, setCheckoutId] = useState(
    localStorage.getItem("checkoutId")
  );
  const [pageModal, setPageModal] = useState(false);
  const [modalData, setModalData] = useState({ type: null, data: null });

  const [currentCheckout, setCurrentCheckout] = useState();

  const [videoFade, setVideoFade] = useSpring(() => ({
    config: { friction: 90 },
    opacity: 0
  }));

  const [productFade, setProductFade] = useSpring(() => ({
    config: { friction: 66 },
    opacity: 0
  }));

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await props.client.product.fetchAll();
      setProducts(result);
      setProductFade({ opacity: 1 });
    };
    fetchProducts();
  }, [props.client.product, setProductFade]);

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
    setModalData({ type: "cart" });
    setPageModal(true);
  }

  function openSlideShow(item) {
    setModalData({ type: "slides", data: item });
    setPageModal(true);
  }

  function closeModal() {
    setPageModal(false);
    setTimeout(() => {
      setModalData({ type: null, data: null });
    }, 500);
  }

  return (
    <div className="container">
      <animated.video
        className="bg-vid"
        muted
        autoPlay
        playsInline
        loop={true}
        style={videoFade}
        onCanPlayThrough={() => {
          setVideoFade({ opacity: 1 });
        }}
      >
        <source src={waterBg} type="video/mp4" />
      </animated.video>
      <Modal
        isOpen={pageModal}
        onRequestClose={closeModal}
        appElement={document.getElementById("App")}
        className="Modal"
        overlayClassName="Overlay"
        closeTimeoutMS={400}
      >
        <video muted className="bg-vid" autoPlay playsInline loop={true}>
          <source src={waterBg} type="video/mp4" />
        </video>

        {modalData.type === "cart" && (
          <Cart
            checkout={currentCheckout}
            removeItem={removeFromCart}
            openShopify={openShopifyCart}
          />
        )}
        {modalData.type === "slides" && <SlideShow product={modalData.data} />}

        <div className="close-modal" onClick={closeModal}>
          back
        </div>
      </Modal>

      <div id="App">
        <header className="App-header">
          <animated.img
            src={logo}
            className="florange-logo"
            alt="logo"
            style={productFade}
          />
        </header>

        {products.map(product => {
          return (
            <Product
              key={product.id}
              data={product}
              cart={addToCart}
              openSlideShow={openSlideShow}
              // images={product.images}
              // title={product.title}
              // price={}
            />
          );
        })}
        <footer className="App-footer">
          <a href="https://mswsn.io" target="_blank" rel="noopener noreferrer">
            <animated.div
              className="made-by-footer"
              style={productFade}
              delay={100}
            >
              <div className="site-by">site by</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 104 18.5"
                className="mswsn-logo"
              >
                <path d="M17.5,0h-3a1,1,0,0,0-1,1V3.5a1,1,0,0,1-1,1h-2a1,1,0,0,1-1-1V1a1,1,0,0,0-1-1h-3a1,1,0,0,0-1,1V3.5a1,1,0,0,1-1,1H1a1,1,0,0,0-1,1v12a1,1,0,0,0,1,1H4a1,1,0,0,0,1-1V6A1,1,0,0,1,6,5H8A1,1,0,0,1,9,6V8.5a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V6a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V17.5a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V5.5a1,1,0,0,0-1-1H19.5a1,1,0,0,1-1-1V1A1,1,0,0,0,17.5,0Z" />
                <path d="M62,13.5H60a1,1,0,0,1-1-1V10a1,1,0,0,0-1-1H55a1,1,0,0,0-1,1v2.5a1,1,0,0,1-1,1H51a1,1,0,0,1-1-1V1a1,1,0,0,0-1-1H46a1,1,0,0,0-1,1V13a1,1,0,0,0,1,1h2.5a1,1,0,0,1,1,1v2.5a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v2.5a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V15a1,1,0,0,1,1-1H67a1,1,0,0,0,1-1V1a1,1,0,0,0-1-1H64a1,1,0,0,0-1,1V12.5A1,1,0,0,1,62,13.5Z" />
                <path d="M28,9.5h3a1,1,0,0,0,1-1V6a1,1,0,0,1,1-1h7a1,1,0,0,0,1-1V1a1,1,0,0,0-1-1H28a1,1,0,0,0-1,1V8.5A1,1,0,0,0,28,9.5Z" />
                <path d="M35,13.5H28a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1H40a1,1,0,0,0,1-1V10a1,1,0,0,0-1-1H37a1,1,0,0,0-1,1v2.5A1,1,0,0,1,35,13.5Z" />
                <path d="M99.5,3.5V1a1,1,0,0,0-1-1H91a1,1,0,0,0-1,1V17.5a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V6a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V17.5a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V5.5a1,1,0,0,0-1-1h-2.5A1,1,0,0,1,99.5,3.5Z" />
                <path d="M73,9.5h3a1,1,0,0,0,1-1V6a1,1,0,0,1,1-1h7a1,1,0,0,0,1-1V1a1,1,0,0,0-1-1H73a1,1,0,0,0-1,1V8.5A1,1,0,0,0,73,9.5Z" />
                <path d="M80,13.5H73a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1H85a1,1,0,0,0,1-1V10a1,1,0,0,0-1-1H82a1,1,0,0,0-1,1v2.5A1,1,0,0,1,80,13.5Z" />
              </svg>
            </animated.div>
          </a>
        </footer>
        <div className="shopping-cart" onClick={openCart}>
          {currentCheckout && currentCheckout.lineItems.length > 0 && (
            <div className="cart-items">
              {currentCheckout.lineItems.reduce((acc, cur) => {
                return acc + cur.quantity;
              }, 0)}
            </div>
          )}
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
          <a href="mailto:viktor.palm93@gmail.com">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default App;
