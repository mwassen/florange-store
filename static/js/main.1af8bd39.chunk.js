(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports=t.p+"static/media/logo.04958462.png"},16:function(e,a,t){e.exports=t(34)},22:function(e,a,t){},3:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),l=t(5),i=t.n(l),r=t(12),o=t.n(r),s=(t(22),t(6)),m=t.n(s),d=t(13),u=t(1);t(3);var v=function(e){return n.a.createElement("div",{className:e.data.title===e.selected.title?"selected":"size",key:e.data.id,onClick:function(a){e.onVariantClick(e.data)}},e.data.title)},p=t(2);var f=function(e){var a=Object(c.useState)(e.data.variants[0]),t=Object(u.a)(a,2),l=t[0],i=t[1],r=Object(p.b)(function(){return{config:{friction:66},opacity:0}}),o=Object(u.a)(r,2),s=o[0],m=o[1];function d(e){i(e)}return n.a.createElement(p.a.div,{className:"product",style:s},n.a.createElement("img",{className:"product-img",alt:e.data.title+" image",src:e.data.images[0].src,onLoad:function(){m({opacity:1})}}),n.a.createElement("div",{className:"product-details"},n.a.createElement("div",{className:"product-name"},e.data.title),n.a.createElement("div",{className:"product-price"},e.data.variants[0].price.split(".")[0],"\u20ac"),"Default Title"!==e.data.variants[0].title&&n.a.createElement("div",{className:"product-variants"},e.data.variants.map(function(e){return n.a.createElement(v,{selected:l,data:e,onVariantClick:d,key:e.id})})),l.available?n.a.createElement("div",{className:"add-to-cart",onClick:function(){e.cart(l.id)}},"add to cart"):n.a.createElement("div",{className:"sold-out"},n.a.createElement("span",{role:"img","aria-label":"skull emoji"},"\ud83d\udc80"),"sold out")))};var h=function(e){return n.a.createElement("div",{className:"cart-item"},n.a.createElement("div",{className:"remove-item",onClick:function(a){e.removeItem(e.data.id)}},"X"),n.a.createElement("div",{className:"item-quantity"},e.data.quantity,"x"),n.a.createElement("img",{className:"item-image",src:e.data.variant.image.src,alt:"photo of "+e.data.title}),n.a.createElement("div",{className:"item-name"},e.data.title),"Default Title"!==e.data.variant.title&&n.a.createElement("div",{className:"item-size"},"size ",e.data.variant.title),n.a.createElement("div",{className:"item-price"},e.data.variant.price.split(".")[0],"\u20ac"))},E=t(14),g=t.n(E),b=t(15),y=t.n(b),k=t(7),N=t.n(k);var w=function(e){var a=Object(c.useState)([]),t=Object(u.a)(a,2),l=t[0],i=t[1],r=Object(c.useState)(localStorage.getItem("checkoutId")),o=Object(u.a)(r,2),s=o[0],v=o[1],E=Object(c.useState)(!1),b=Object(u.a)(E,2),k=b[0],w=b[1],V=Object(c.useState)(),O=Object(u.a)(V,2),j=O[0],H=O[1],I=Object(p.b)(function(){return{config:{friction:90},opacity:0}}),A=Object(u.a)(I,2),C=A[0],M=A[1],S=Object(p.b)(function(){return{config:{friction:66},opacity:0}}),x=Object(u.a)(S,2),Z=x[0],T=x[1];function q(a){var t={variantId:a,quantity:1};e.client.checkout.addLineItems(s,t).then(function(e){H(e)})}function B(a){var t=[a];e.client.checkout.removeLineItems(s,t).then(function(e){H(e)})}function P(){w(!1)}return Object(c.useEffect)(function(){!function(){var a=Object(d.a)(m.a.mark(function a(){var t;return m.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.client.product.fetchAll();case 2:t=a.sent,i(t),T({opacity:1});case 5:case"end":return a.stop()}},a)}));return function(){return a.apply(this,arguments)}}()()},[e.client.product]),Object(c.useEffect)(function(){null==s?e.client.checkout.create().then(function(e){localStorage.setItem("checkoutId",e.id),H(e),v(e.id)}):e.client.checkout.fetch(s).then(function(e){H(e)}).catch(function(a){e.client.checkout.create().then(function(e){localStorage.setItem("checkoutId",e.id),v(e.id)})})},[e.client.checkout,s]),n.a.createElement("div",{className:"container"},n.a.createElement(p.a.video,{className:"bg-vid",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,style:C,onCanPlayThrough:function(){M({opacity:1})}},n.a.createElement("source",{src:N.a,type:"video/webm"})),n.a.createElement(g.a,{isOpen:k,onRequestClose:P,appElement:document.getElementById("App"),className:"Modal",overlayClassName:"Overlay",closeTimeoutMS:200},n.a.createElement("video",{className:"bg-vid",autoPlay:!0,loop:!0,muted:!0,playsInline:!0},n.a.createElement("source",{src:N.a,type:"video/webm"})),n.a.createElement("div",{className:"modal-header"}),j&&j.lineItems.length>0?n.a.createElement("div",null,n.a.createElement("div",{className:"cart-contents"},j.lineItems.map(function(e){return n.a.createElement(h,{data:e,removeItem:B,key:e.id})})),n.a.createElement("div",{className:"modal-footer"},n.a.createElement("div",{className:"total-price"},"total:"," ",j&&j.totalPrice.split(".")[0],"\u20ac"),n.a.createElement("div",{className:"checkout-btn",onClick:function(a){e.client.checkout.fetch(s).then(function(e){e.lineItems.length>0&&window.open(e.webUrl)})}},"check out"))):n.a.createElement("div",null,"your cart is empty"),n.a.createElement("div",{className:"close-modal",onClick:P},"back")),n.a.createElement("div",{id:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement(p.a.img,{src:y.a,className:"florange-logo",alt:"logo",style:Z})),l.map(function(e){return n.a.createElement(f,{key:e.id,data:e,cart:q})}),n.a.createElement("footer",{className:"App-footer"},n.a.createElement("a",{href:"https://mswsn.io",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(p.a.div,{className:"made-by-footer",style:Z,delay:100},n.a.createElement("div",{className:"site-by"},"site by"),n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 104 18.5",className:"mswsn-logo"},n.a.createElement("path",{class:"cls-1",d:"M17.5,0h-3a1,1,0,0,0-1,1V3.5a1,1,0,0,1-1,1h-2a1,1,0,0,1-1-1V1a1,1,0,0,0-1-1h-3a1,1,0,0,0-1,1V3.5a1,1,0,0,1-1,1H1a1,1,0,0,0-1,1v12a1,1,0,0,0,1,1H4a1,1,0,0,0,1-1V6A1,1,0,0,1,6,5H8A1,1,0,0,1,9,6V8.5a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V6a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V17.5a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V5.5a1,1,0,0,0-1-1H19.5a1,1,0,0,1-1-1V1A1,1,0,0,0,17.5,0Z"}),n.a.createElement("path",{class:"cls-1",d:"M62,13.5H60a1,1,0,0,1-1-1V10a1,1,0,0,0-1-1H55a1,1,0,0,0-1,1v2.5a1,1,0,0,1-1,1H51a1,1,0,0,1-1-1V1a1,1,0,0,0-1-1H46a1,1,0,0,0-1,1V13a1,1,0,0,0,1,1h2.5a1,1,0,0,1,1,1v2.5a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v2.5a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V15a1,1,0,0,1,1-1H67a1,1,0,0,0,1-1V1a1,1,0,0,0-1-1H64a1,1,0,0,0-1,1V12.5A1,1,0,0,1,62,13.5Z"}),n.a.createElement("path",{class:"cls-1",d:"M28,9.5h3a1,1,0,0,0,1-1V6a1,1,0,0,1,1-1h7a1,1,0,0,0,1-1V1a1,1,0,0,0-1-1H28a1,1,0,0,0-1,1V8.5A1,1,0,0,0,28,9.5Z"}),n.a.createElement("path",{class:"cls-1",d:"M35,13.5H28a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1H40a1,1,0,0,0,1-1V10a1,1,0,0,0-1-1H37a1,1,0,0,0-1,1v2.5A1,1,0,0,1,35,13.5Z"}),n.a.createElement("path",{class:"cls-1",d:"M99.5,3.5V1a1,1,0,0,0-1-1H91a1,1,0,0,0-1,1V17.5a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V6a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V17.5a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V5.5a1,1,0,0,0-1-1h-2.5A1,1,0,0,1,99.5,3.5Z"}),n.a.createElement("path",{class:"cls-1",d:"M73,9.5h3a1,1,0,0,0,1-1V6a1,1,0,0,1,1-1h7a1,1,0,0,0,1-1V1a1,1,0,0,0-1-1H73a1,1,0,0,0-1,1V8.5A1,1,0,0,0,73,9.5Z"}),n.a.createElement("path",{class:"cls-1",d:"M80,13.5H73a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1H85a1,1,0,0,0,1-1V10a1,1,0,0,0-1-1H82a1,1,0,0,0-1,1v2.5A1,1,0,0,1,80,13.5Z"}))))),n.a.createElement("div",{className:"shopping-cart",onClick:function(e){w(!0)}},"Cart"),n.a.createElement("div",{className:"contact-links"},n.a.createElement("a",{href:"https://www.instagram.com/florangedesign/",target:"_blank",rel:"noopener noreferrer"},"Instagram"),n.a.createElement("a",{href:"mailto:someone@yoursite.com"},"Contact"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=o.a.buildClient({domain:"florange-store.myshopify.com",storefrontAccessToken:"3778d6a550469c0e275fa2399f74406e"});i.a.render(n.a.createElement(w,{client:V}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,a,t){e.exports=t.p+"static/media/waterbg.5f867c85.webm"}},[[16,1,2]]]);
//# sourceMappingURL=main.1af8bd39.chunk.js.map