import { useContext, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    function addToCart(producto) {
        setCart([
            ...cart,
            producto])
    }
    function emptyCart(){
        setCart([])
    } 
    
    return(
        <CartContext.Provider
        value={{
            cart,
            addToCart,
            emptyCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}