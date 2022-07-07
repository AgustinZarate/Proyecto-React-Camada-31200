import React from 'react'
import { useCartContext } from "../../context/CartContext"
import { Col, Image } from 'react-bootstrap';

const ProductCart = () => {
    const {cart, emptyCart, deleteProdCart, totalPrice} = useCartContext()
  return (
    <>
            {
              cart.map(producto =>
        <Col md={4}>
                <div className='card-cart' key={producto.id}>
                nombre: {producto.nombre} <br />
                cantidad: {producto.cantidad} <br />
                <Image className='w-25' src={`/${producto.img}`} alt={`portada ${producto.nombre}`}/> <br />
                <button onClick={()=> deleteProdCart(producto.id)}>Eliminar Producto</button>
                </div>
        </Col>
                )
            }
        <p>total: {totalPrice()}</p>
        <button onClick={emptyCart}>Vaciar Carrito</button>
    </>
  )
}

export default ProductCart