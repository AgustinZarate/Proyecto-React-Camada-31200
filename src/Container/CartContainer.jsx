import {useState, React} from 'react'
import ProductCart from '../Components/CartList/CartList'
import { useCartContext } from "../context/CartContext"
import { Row } from 'react-bootstrap';
import EmptyCart from '../Components/EmptyCart/EmptyCart';
import './cart.css';
import CartList from '../Components/CartList/CartList';


function CartContainer() {

  const {cart} = useCartContext()

  return (
    <>
      {
        cart.length > 0 ?
        <Row>
          <CartList />
        </Row>
      : <EmptyCart />
      }
      
    </>
  )
}

export default CartContainer