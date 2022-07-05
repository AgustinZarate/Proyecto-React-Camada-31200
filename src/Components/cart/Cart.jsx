import React from 'react'
import { useCartContext } from "../../context/CartContext"

function Cart() {
  const {cart, emptyCart} = useCartContext()

  console.log(cart)

  return (
    <>
    <ul>
      {
        cart.map(producto =>
          <li key={producto.id}>
            nombre: {producto.nombre} <br />
            cantidad: {producto.cantidad}
          </li>)
      }
    </ul>
    <button onClick={emptyCart}>Vaciar Carrito</button>
    </>
  )
}

export default Cart