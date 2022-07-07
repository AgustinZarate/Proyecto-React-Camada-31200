import React from 'react'
import ProductCart from '../ProductCart/ProductCart'
import { useCartContext } from "../../context/CartContext"
import { Row } from 'react-bootstrap';



function Cart() {

  const {cart} = useCartContext()

  console.log(cart)

  return (
    <>
      {
        cart.length > 0 ?
        <Row>
          <ProductCart />
        </Row>
      : <p>El carrito esta vacio</p>
      }
    </>
  )
}

export default Cart