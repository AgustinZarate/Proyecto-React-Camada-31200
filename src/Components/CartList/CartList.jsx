import {useState, React} from 'react'
import { useCartContext } from "../../context/CartContext"
import { Col, Image, Row } from 'react-bootstrap';
import { addDoc, collection, getFirestore} from 'firebase/firestore'
import CartItem from '../CartItem/CartItem';
import './CartList.css';

const CartList = ({}) => {
const {cart, emptyCart, deleteProdCart, totalPrice, setIdBuyed} = useCartContext()
const [name, setName] = useState("");
const [mail, setMail] = useState("");
const [phone, setPhone] = useState("");

function handleClick(){
let order = {
buyer: {name, mail, phone},
items: cart,
total: totalPrice()
};

addDoc(ordersCollection, order).then(({id}) => {
setIdBuyed(id);
});

emptyCart()
}

const db = getFirestore()
const ordersCollection = collection(db, 'orders');

return (
<>
  <Col className='conteiner-cart' md={6}>
    <Row className='container-proucts'>
        {
        cart.map(producto =>

        <Col className='products' key={producto.Id} md={4}>
        <CartItem producto={producto} />
        </Col>

        )
        }
    </Row>
    <p>Total: <br /> ${totalPrice()}</p>
    <button className='btn btn-danger' onClick={emptyCart}>Vaciar Carrito</button>
  </Col>

  <Col md={6} className='container-form'>
    <form>
      <h4>Complete los datos para finalizar su compra</h4>
      <input onChange={(e)=> setName(e.target.value)} type="text" placeholder="Ingrese su nombre" ></input>
      <input onChange={(e)=> setMail(e.target.value)} type="email" placeholder="Ingrese su e-mail"></input>
      <input onChange={(e)=> setPhone(e.target.value)} type="number" placeholder="Ingrese un celular"></input>
      <button onClick={()=> handleClick()} className='btn btn-warning fw-bold p-2 m-2'>Terminar Compra</button>
    </form>
  </Col>

</>
)
}

export default CartList