import  React from 'react'
import { useCartContext } from "../../context/CartContext"
import { Col, Image } from 'react-bootstrap';

const ProductCart = ({generarOrden}) => {
    const {cart, emptyCart, deleteProdCart, totalPrice} = useCartContext()
  return (
    <>
            {
              cart.map(producto =>
        <Col key={producto.id} md={4}>
                <div className='card-cart' >
                nombre: {producto.nombre} <br />
                cantidad: {producto.cantidad} <br />
                <Image className='w-25' src={`/${producto.img}`} alt={`portada ${producto.nombre}`}/> <br />
                <button onClick={()=> deleteProdCart('LkQS6pEwAETvxFpV0Cql')}>Eliminar Producto</button>
                </div>
        </Col>
                )
            }
        <p>total: {totalPrice()}</p>
        <button onClick={emptyCart}>Vaciar Carrito</button>
        <button onClick={generarOrden}>Generar Orden</button>
    </>
  )
}

export default ProductCart