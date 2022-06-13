import React, { useEffect, useState } from 'react'
import { ItemCount } from '../Components/itemCount/ItemCount'
import ItemList from '../Components/itemList/ItemList'
import {productos} from '../data/data.js'
import './itemListContainer.css'


function ItemListContainer({}) {
  const [listaProductos, setListaProductos] = useState([]);
  const [loading, setLoading] = useState(true)

  let condition = true;

  const pedirDatos = (res) => {
    return new Promise((resolve, reject) => {
      if(res) {
        setTimeout(()=>{
          resolve(productos)             /* La funcion pedirDatos es una PROMESA que espera una respuesta */
        }, 3000)                        /* si la respuesta es favorable se almacena en la propiedad RESOLVE  */
      }else{                             /* si es denegada se almacena en la propiedad REJECT */
        setTimeout(()=>{
          reject('404')
        }, 2000)
      }
    })
  }

  useEffect(() => {
    /* EJECUTAR UNA PROMESA PARA SOLICITAR DATOS A API */
    pedirDatos(condition)
      .then((res) => {setListaProductos(res);})           /* FUNCIONES QUE CAPTURAN LA RESPUESTA */
      .catch((error)=> alert(error))                /* SI ES EXITOSA .then. A partir de eso se utiliza el Hook de estado para poder mapear los datos obtenidos */
      .finally(()=>setLoading(false))                     /* SI ES FALLA .catch */
  }, []);


  
  return (
    <>
      <div className='itemList'>
        {loading ? <p>Cargando..</p> : <ItemList listaProductos={listaProductos} />}
      </div>
    </>
  )
}

export default ItemListContainer