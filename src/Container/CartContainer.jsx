import {useState, React} from 'react'
import ProductCart from '../Components/CartList/CartList'
import { useCartContext } from "../context/CartContext"
import { Row } from 'react-bootstrap';
import EmptyCart from '../Components/EmptyCart/EmptyCart';
import './cart.css';
import CartList from '../Components/CartList/CartList';


function CartContainer() {

  const {cart, idBuyed} = useCartContext()

  return (
    <>
      {
        cart.length > 0 ?
        <Row>
          <CartList />
        </Row>
      : <EmptyCart />
      }
      {idBuyed === ""
      ? ""
      : 
      <h4>Codigo de orden: {idBuyed}</h4>
      }
      
    </>
  )
}

export default CartContainer