(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/logo.04958462.png"},14:function(e,t,a){e.exports=a.p+"static/media/poolbg.332dd5d3.png"},15:function(e,t,a){e.exports=a(33)},2:function(e,t,a){},21:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(4),r=a.n(i),o=a(10),l=a.n(o),s=(a(21),a(5)),m=a.n(s),d=a(11),u=a(1);a(2);var f=function(e){return c.a.createElement("div",{className:e.data.title===e.selected.title?"selected":"size",key:e.data.id,onClick:function(t){e.onVariantClick(e.data)}},e.data.title)};var v=function(e){var t=Object(n.useState)(e.data.variants[0]),a=Object(u.a)(t,2),i=a[0],r=a[1];function o(e){r(e)}return c.a.createElement("div",{className:"product"},c.a.createElement("img",{className:"product-img",alt:e.data.title+" image",src:e.data.images[0].src}),c.a.createElement("div",{className:"product-name"},e.data.title),c.a.createElement("div",{className:"product-price"},e.data.variants[0].price.split(".")[0],"\u20ac"),"Default Title"!==e.data.variants[0].title&&c.a.createElement("div",{className:"product-variants"},e.data.variants.map(function(e){return c.a.createElement(f,{selected:i,data:e,onVariantClick:o,key:e.id})})),i.available?c.a.createElement("div",{className:"add-to-cart",onClick:function(){e.cart(i.id)}},"add to cart"):c.a.createElement("div",{className:"sold-out"},"\ud83d\udc80sold out \ud83d\udc80"))};var p=function(e){return console.log(e.data),c.a.createElement("div",{className:"cart-item"},c.a.createElement("div",{className:"remove-item",onClick:function(t){e.removeItem(e.data.id)}},"X"),c.a.createElement("div",{className:"item-quantity"},e.data.quantity,"x"),c.a.createElement("img",{className:"item-image",src:e.data.variant.image.src}),c.a.createElement("div",{className:"item-name"},e.data.title),"Default Title"!==e.data.variant.title&&c.a.createElement("div",{className:"item-size"},"size ",e.data.variant.title),c.a.createElement("div",{className:"item-price"},e.data.variant.price.split(".")[0],"\u20ac"))},E=a(12),h=a.n(E),g=a(13),k=a.n(g),N=a(14),b=a.n(N);var w=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),i=a[0],r=a[1],o=Object(n.useState)(localStorage.getItem("checkoutId")),l=Object(u.a)(o,2),s=l[0],f=l[1],E=Object(n.useState)(!1),g=Object(u.a)(E,2),N=g[0],w=g[1],y=Object(n.useState)(),I=Object(u.a)(y,2),O=I[0],j=I[1];function C(t){var a={variantId:t,quantity:1};e.client.checkout.addLineItems(s,a).then(function(e){j(e)})}function S(t){var a=[t];e.client.checkout.removeLineItems(s,a).then(function(e){j(e),console.log(e)})}function x(){w(!1)}return Object(n.useEffect)(function(){!function(){var t=Object(d.a)(m.a.mark(function t(){var a;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.client.product.fetchAll();case 2:a=t.sent,r(a);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()()},[]),Object(n.useEffect)(function(){null==s?e.client.checkout.create().then(function(e){localStorage.setItem("checkoutId",e.id),j(e),f(e.id)}):e.client.checkout.fetch(s).then(function(e){j(e)}).catch(function(t){e.client.checkout.create().then(function(e){localStorage.setItem("checkoutId",e.id),f(e.id)})})},[]),c.a.createElement("div",{className:"container"},c.a.createElement("img",{className:"bg-img",src:b.a}),c.a.createElement(h.a,{isOpen:N,onRequestClose:x,appElement:document.getElementById("App"),className:"Modal",overlayClassName:"Overlay",closeTimeoutMS:200},c.a.createElement("div",{className:"modal-header"}),O&&O.lineItems.length>0?c.a.createElement("div",null,c.a.createElement("div",{className:"cart-contents"},O.lineItems.map(function(e){return c.a.createElement(p,{data:e,removeItem:S,key:e.id})})),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("div",{className:"total-price"},"total:"," ",O&&O.totalPrice.split(".")[0],"\u20ac"),c.a.createElement("div",{className:"checkout-btn",onClick:function(t){e.client.checkout.fetch(s).then(function(e){e.lineItems.length>0&&window.open(e.webUrl)})}},"check out"))):c.a.createElement("div",null,"your cart is empty"),c.a.createElement("div",{className:"close-modal",onClick:x},"back")),c.a.createElement("div",{id:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:k.a,className:"florange-logo",alt:"logo"})),i.map(function(e){return c.a.createElement(v,{key:e.id,data:e,cart:C})}),c.a.createElement("footer",{className:"App-footer"}),c.a.createElement("div",{className:"shopping-cart",onClick:function(e){w(!0)}},"Cart"),c.a.createElement("div",{className:"contact-links"},c.a.createElement("a",{href:"https://www.instagram.com/florangedesign/",target:"_blank",rel:"noopener noreferrer"},"Instagram"),c.a.createElement("a",{href:"mailto:someone@yoursite.com"},"Contact"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=l.a.buildClient({domain:"florange-store.myshopify.com",storefrontAccessToken:"3778d6a550469c0e275fa2399f74406e"});r.a.render(c.a.createElement(w,{client:y}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.5253134e.chunk.js.map