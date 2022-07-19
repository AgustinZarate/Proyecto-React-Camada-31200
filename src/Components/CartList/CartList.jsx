import {useState, React} from 'react'
import { useCartContext } from "../../context/CartContext"
import { Col, Image, Row } from 'react-bootstrap';
import { addDoc, collection, getFirestore} from 'firebase/firestore'

const CartList = ({}) => {
    const {cart, emptyCart, deleteProdCart, totalPrice} = useCartContext()
    console.log(cart[0].Id)

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [cel, setCel] = useState("");

    const [idBuyed, setIdBuyed]=useState('')


    function handleClick(){
      let order = {
          buyer: {name, mail, cel},
          items: cart,
          total: totalPrice()
      };

      addDoc(ordersCollection, order).then(({id}) => {
        setIdBuyed(id);
      });

      emptyCart()
  }




  console.log(cart)


  const db = getFirestore()
  const ordersCollection = collection(db, 'orders');

  return (
    <>
                <Col md={6}>
                  <Row>
                        {
                          cart.map(producto =>
                            
                    <Col className='producto-in-cart' key={producto.Id} md={4}>
                            <div className='card-cart' >
                            nombre: {producto.nombre} <br />
                            cantidad: {producto.cantidad} <br />
                            <Image className='w-25' src={`/${producto.img}`} alt={`portada ${producto.nombre}`}/> <br />
                            <button onClick={()=> /* console.log(producto.Id) */ deleteProdCart(producto.Id)}>Eliminar Producto</button>
                            </div>
                    </Col>
                    
                            )
                        }
                    </Row>
                    <p>total: {totalPrice()}</p>
        <button onClick={emptyCart}>Vaciar Carrito</button> 
                </Col>
            
        <Col md={6} className='container-form'>
          <form>
            <h4 className="titleCheck">Por favor complete los datos para finalizar su compra</h4>
            <input onChange={(e) => setName(e.target.value)} placeholder="Ingrese su nombre" className="inName"></input>
            <input onChange={(e) => setMail(e.target.value)} placeholder="Ingrese su e-mail" className="inMail"></input>
            <input onChange={(e) => setCel(e.target.value)} placeholder="Ingrese un celular" className="inCel"></input>
            <button onClick={() => handleClick()} className='btn btn-warning fw-bold p-2 m-2'>Terminar Compra</button>
            <h4 className="orderNumber">Su número de pedido es: {idBuyed}</h4>
          </form>
        </Col>
        
    </>
  )
}

export default CartList