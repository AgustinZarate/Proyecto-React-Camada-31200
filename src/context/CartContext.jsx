import { useContext, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([])



export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [idBuyed, setIdBuyed]=useState('')
    const [cart, setCart] = useState([])

    const [count, setCount] = useState(1); //ItemCount
    console.log(`cantidad por afuera ${count}`)
    
    const isInCart = (id) => {
        return cart.some((x) => x.Id === id)
    }

    const addToCart = (producto) => {
        

        if(isInCart(producto.Id)){
            const producto = cart.find((x) => x.Id === producto.Id)
            const iProducto = cart.indexOf(producto)
             const cart = [...cart]
             cart[iProducto].cantidad += producto.cantidad
            setCart(cart)
        }else{
            setCart([...cart, producto])
           
        }
    }


    function emptyCart(){
        setCart([])
    }

    function deleteProdCart(id) {
        return setCart(cart.filter(x => x.Id !== id))
    }


    function totalPrice (){
        return cart.reduce((acum, producto)=>acum + producto.cantidad * producto.precio, 0)
    }

    function totalCart ()
    {return cart.reduce((acum, producto)=>acum + producto.cantidad, 0)
    }

    const [ cant, setCant] = useState(0)

    return(
        <CartContext.Provider value={ {count, cant, setCant, setCount, cart, addToCart, emptyCart, deleteProdCart, totalPrice, totalCart, setIdBuyed, idBuyed} } >
            {children}
        </CartContext.Provider>
    )
}