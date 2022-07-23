import { useContext, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([])



export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [idBuyed, setIdBuyed]=useState('')
    const [cart, setCart] = useState([])
    const [count, setCount] = useState(1);

    function addToCart (producto) {
        if(cart.find((x) => x.Id === producto.Id)){
            const oldProducto = cart.find((x) => x.Id === producto.Id)
            const iOldProducto = cart.indexOf(oldProducto)
            const newCart = [...cart]
            newCart[iOldProducto].cantidad += producto.cantidad
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