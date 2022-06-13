import React, { useEffect, useState } from 'react'
import { ItemCount } from '../Components/itemCount/ItemCount'
import ItemList from '../Components/itemList/ItemList'
import { pedirDatos } from '../helpers/pedirDatos'
import './itemListContainer.css'


function ItemListContainer({}) {
  const [listaProductos, setListaProductos] = useState([]);
  const [loading, setLoading] = useState(true)

  let condition = true;

  useEffect(() => {
    /* EJECUTAR UNA PROMESA PARA SOLICITAR DATOS A API */
    pedirDatos(condition)
      .then((res) => {setListaProductos(res);})           /* FUNCIONES QUE CAPTURAN LA RESPUESTA */
      .catch((error)=> alert(error))                      /* SI ES EXITOSA .then. A partir de eso se utiliza el Hook de estado para poder mapear los datos obtenidos */
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