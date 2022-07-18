import { useContext, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const [count, setCount] = useState(1); //ItemCount

    function addToCart(producto) {
/*         if(cart.some(e => e.id === producto.id)){
            const prod = cart.find(e => e.id === producto.id)
            producto.cantidad = producto.cantidad + count
            setCart([
                ...cart,
                producto])
            
            console.log("Se Repite un ID")
        }else{
            setCart([
                ...cart,
                producto])
            }
        } */
        setCart([
            ...cart,
            producto])
        }

    function emptyCart(){
        setCart([])
    }

    function deleteProdCart(id) {
        const items = cart.filter((i)=> i.producto.id !== id)
        setCart(items)
        return
    }
    

    function totalPrice (){
        return cart.reduce((acum, producto)=>acum + producto.cantidad * producto.precio, 0)
    }

    function totalCart ()
    {return cart.reduce((acum, producto)=>acum + producto.cantidad, 0)
    }

    return(
        <CartContext.Provider value={ {count, setCount, cart, addToCart, emptyCart, deleteProdCart, totalPrice, totalCart} } >
            {children}
        </CartContext.Provider>
    )
}