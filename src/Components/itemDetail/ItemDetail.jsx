import React from 'react'
import './itemDeatil.css'
import ItemCount from '../itemCount/ItemCount.jsx'
import { useState, useEffect, useContext } from 'react'
import InputCount from '../InputCount/InputCount'
import { CartContext, useCartContext } from "../../context/CartContext"

export const ItemDetail = ({producto}) => {
  const {cart, addToCart} = useCartContext()
  const [inputType, setInputType] = useState('button')
  const [ cant, setCant] = useState(0)

  const OnAdd =(cant)=>{
    setCant(cant)
    setTimeout(()=>{
      setInputType('input')
    }, 1500)
    addToCart({ ...producto, cantidad: cant}) 
  }
  const [categoria, setCategoria] = useState(undefined)

  useEffect(()=>{
    setCategoria(producto.categoria)
  }, []);

  return (
    <>
    <div className="item-detail">
        <div className="container-detail">

          {producto.categoria === "PS4" ? 
          <div className="container-img-detail play-station">
          <iframe width="560" height="315" src={`${producto.trailer}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          
          : producto.categoria === "XBOX" ?
          
          <div className="container-img-detail xbox">

            <iframe width="560" height="315" src={`${producto.trailer}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          
          :

          <div className="container-img-detail nintendo">

            <iframe width="560" height="315" src={`${producto.trailer}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          }

          <div className="details">
            <h2>{producto.nombre} <br /><span>{producto.categoria}</span></h2>
            <p>{producto.descripsion}</p>
              <h3>${producto.precio}</h3>
              <h6>Stock Actual: {producto.stock}</h6>
            {inputType === 'button' ? 
              <ItemCount producto={producto} OnAdd={OnAdd} />
              :
              <InputCount />
            }
          </div>
        </div>
    </div>
    </>
  )
}
