import React, { useState, useEffect } from "react";
import Product from "./Product";
import logo from "../assets/logo.png";
import "../css/App.css";

function App(props) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await props.client.product.fetchAll();
      setProducts(result);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let checkoutId = localStorage.getItem("checkoutId");

    if (checkoutId == null) {
      console.log("creating new cart");
      props.client.checkout.create().then(checkout => {
        localStorage.setItem("checkoutId", checkout.id);
        checkoutId = checkout.id;
      });
    } else {
      console.log("loading existing cart");
      props.client.checkout
        .fetch(checkoutId)
        .then(checkout => {})
        .catch(error => {
          props.client.checkout.create().then(checkout => {
            localStorage.setItem("checkoutId", checkout.id);
            checkoutId = checkout.id;
          });
        });
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="florange-logo" alt="logo" />
      </header>

      {products.map(product => {
        return (
          <Product
            key={product.id}
            data={product}
            // images={product.images}
            // title={product.title}
            // price={}
          />
        );
      })}
      <footer className="App-footer" />
      <div className="shopping-cart">Cart</div>
      <div className="contact-links">
        <a href="https://www.instagram.com/florangedesign/" target="_blank">
          Instagram
        </a>
        <a href="mailto:someone@yoursite.com">Contact</a>
      </div>
    </div>
  );
}

export default App;
