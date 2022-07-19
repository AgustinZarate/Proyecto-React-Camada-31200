import { useContext, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([])



export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const [count, setCount] = useState(1); //ItemCount
    console.log(`cantidad por afuera ${count}`)
    
    const isInCart = (id) => {
        return cart.some((x) => x.Id === id)
    }

    const addToCart = (producto, cant) => {
        

        if(isInCart(producto.Id)){

            console.log(`cantidad ${cant}`)
            const findProduct = cart.find((x) => x.Id === producto.Id)
            console.log((`El producto que se repite es ${findProduct.nombre}`))
            const indexProduct = cart.indexOf(findProduct)
            console.log(`El indice es ${indexProduct}`)
             const nuevoArray = [...cart]
             console.log(nuevoArray)
             console.log(`la cantidad es seleccionada X SEGUNDA VEZ ES ${cant}`)
             console.log(`la cantidad actual es ${nuevoArray[indexProduct].cantidad}`)
            nuevoArray[indexProduct].cantidad += producto.cantidad
            console.log(nuevoArray[indexProduct].cantidad)
            setCart(nuevoArray)
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
        <CartContext.Provider value={ {count, cant, setCant, setCount, cart, addToCart, emptyCart, deleteProdCart, totalPrice, totalCart} } >
            {children}
        </CartContext.Provider>
    )
}