import React from 'react'
import ProductCart from '../ProductCart/ProductCart'
import { useCartContext } from "../../context/CartContext"
import { Row } from 'react-bootstrap';
import EmptyCart from './EmptyCart';
import { addDoc, collection, getFirestore} from 'firebase/firestore'


function Cart() {

  const {cart, emptyCart, totalPrice} = useCartContext()

  console.log(cart)

  function generarOrden(e) {
    e.preventDefault()
    let orden = {}
    orden.buyer ={
      nombre: 'Usuario',
      email: 'a@a.com',
      telefono: '123456789'
    }
    orden.total = totalPrice()
    orden.productos = cart.map(cartProduct => {
      const id = cartProduct.id
      const nombre = cartProduct.nombre
      const precio = cartProduct.precio * cartProduct.cant

      return {id, nombre, precio}
    })

    console.log(orden)

      const db = getFirestore()
      const orderCollection = collection(db, 'ordenes')
      addDoc(orderCollection, orden)
      .then(resp => console.log(resp))
    
  }


  return (
    <>
      {
        cart.length > 0 ?
        <Row>
          <ProductCart generarOrden={generarOrden} />
        </Row>
      : <EmptyCart />
      }
    </>
  )
}

export default Cart