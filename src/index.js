import React from "react";
import ReactDOM from "react-dom";
import Client from "shopify-buy";
import "./css/index.css";
import App from "./js/App";
import * as serviceWorker from "./js/serviceWorker";

const client = Client.buildClient({
  domain: "florange-store.myshopify.com",
  storefrontAccessToken: "3778d6a550469c0e275fa2399f74406e"
});

ReactDOM.render(<App client={client} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
