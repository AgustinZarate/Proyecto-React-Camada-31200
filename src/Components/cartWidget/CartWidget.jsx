import React from "react";
import './CartWidget.css';

const CartWidget = ({children}) => {
  return (
    <div className="nav-cartWidget">
      <img className="carrito" id="carrito" src="/img/cart-widget.png" alt="carrito de compras" />
      <div className="counter-cart">
        {children}
      </div>
    </div>
  );
};

export default CartWidget;

