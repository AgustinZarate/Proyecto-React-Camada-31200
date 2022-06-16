import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../Components/itemDetail/ItemDetail';
import { pedirDatos } from '../helpers/pedirDatos';

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true)

  const {itemId} = useParams()

  let condition = true;

  useEffect(() => {
    /* EJECUTAR UNA PROMESA PARA SOLICITAR DATOS A API */
    pedirDatos(condition)
      .then((res) => {setProducto(res.find((prod)=> prod.id === Number(itemId)));})               /* FUNCIONES QUE CAPTURAN LA RESPUESTA */
      .catch((error)=> alert(error))                      /* SI ES EXITOSA .then. A partir de eso se utiliza el Hook de estado para poder mapear los datos obtenidos */
      .finally(()=>setLoading(false))                     /* SI ES FALLA .catch */
  }, [itemId]);

  return (
    <>
        {loading ? <p>Cargando..</p> : <ItemDetail producto={producto} />}
    </>
  )
}
