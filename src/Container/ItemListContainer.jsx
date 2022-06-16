import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemCount } from '../Components/itemCount/ItemCount'
import ItemList from '../Components/itemList/ItemList'
import { pedirDatos } from '../helpers/pedirDatos'
import './itemListContainer.css'


function ItemListContainer({}) {
  const [listaProductos, setListaProductos] = useState([]);
  const [loading, setLoading] = useState(true)

  let condition = true;

  const {catId} = useParams()
  console.log(catId)

  useEffect(() => {
    if(catId){
      pedirDatos(condition)
      .then((res) => {setListaProductos(res.filter(prod => prod.categoria === catId));})           /* FUNCIONES QUE CAPTURAN LA RESPUESTA */
      .catch((error)=> alert(error))                      /* SI ES EXITOSA .then. A partir de eso se utiliza el Hook de estado para poder mapear los datos obtenidos */
      .finally(()=>setLoading(false))  
    }else{
      pedirDatos(condition)
      .then((res) => {setListaProductos(res);})           /* FUNCIONES QUE CAPTURAN LA RESPUESTA */
      .catch((error)=> alert(error))                      /* SI ES EXITOSA .then. A partir de eso se utiliza el Hook de estado para poder mapear los datos obtenidos */
      .finally(()=>setLoading(false))  
    }
  }, [catId]);


  
  return (
    <>
      <div className='itemList'>
        {loading ? <p>Cargando..</p> : <ItemList listaProductos={listaProductos} />}
      </div>
    </>
  )
}

export default ItemListContainer