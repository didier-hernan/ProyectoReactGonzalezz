import React from 'react';
import carrito from './carrito.png';
const CartWidget = () => {

  return (
    <div className="cart-widget">
      <img src={carrito} alt="Icono del carrito" />
      <p>1</p>
      </div>
  );
};

export default CartWidget;