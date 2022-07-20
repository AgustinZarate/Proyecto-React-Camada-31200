import React from 'react'
import { Col, Image, Row } from 'react-bootstrap';
import { useCartContext } from "../../context/CartContext";
import './cartItem.css';

function CartItem({producto}) {
const desc = producto.precio * 20 / 100
const {cart, emptyCart, deleteProdCart, totalPrice} = useCartContext()
return (
<div className='card-cart'>
    <div className='container-image'>
        <Image className='image-cart-item' src={`/${producto.img}`} alt={`portada ${producto.nombre}`} />
        <button onClick={()=> deleteProdCart(producto.Id)}>X</button>
        <div className='cantidad'>
            {`x${producto.cantidad}` }
        </div>
        {producto.recomendado ?
                      <Image className='recomendado' src="../img/recomendado.png"/>
                      : ''
                    }
    </div>
    <div className='precio'>
        {
            <span>$ {producto.precio}</span> 
        } 
    </div>

</div>
)
}

export default CartItem