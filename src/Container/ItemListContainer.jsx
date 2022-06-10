import React, { useEffect, useState } from 'react'
import { ItemCount } from '../Components/itemCount/ItemCount'
import ItemList from '../Components/itemList/ItemList'
import {productos} from '../data/data.js'


function ItemListContainer({mensaje}) {

  let condition = true;

  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    /* EJECUTAR UNA PROMESA PARA SOLICITAR DATOS A API */
    const pedirDatos = new Promise((resolve, reject) => {

      if(condition) {
        setTimeout(()=>{
          resolve(productos)
          /* LA FUNCION setListaProductos NO SE EJECUTA DENTRO DEL .then PERO SI LO HACE EN LA PROMESA */
          setListaProductos(productos); 
        }, 3000)
      }else{
        setTimeout(()=>{
          reject('404')
        }, 2000)
      }
    })

      /* FUNCIONES QUE CAPTURAN LA RESPUESTA */
      /* SI ES EXITOSA .then */

      /*.then((res) => {
        (res) => {
          setListaProductos(res);
        };
      }) */
      /* SI ES FALLA .catch */
      .catch((error)=> console.log(error))
      .finally(()=>setLoading(false))
  }, []);



  const [loading, setLoading] = useState(true)
  
  return (
    <>
      {/* <h2 style={{color: "red" }} >{mensaje}</h2> */}
      <div className='text-center'>
        {loading ? <p>Cargando..</p> : <ItemList listaProductos={listaProductos}/>}
      </div>
    </>
  )
}

export default ItemListContainer