import React, {useState, useEffect} from 'react'
import { ItemDetail } from '../Components/itemDetail/ItemDetail';
import { pedirDatos } from '../helpers/pedirDatos';

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true)

  let condition = true;

  useEffect(() => {
    /* EJECUTAR UNA PROMESA PARA SOLICITAR DATOS A API */
    pedirDatos(condition)
      .then((res) => {setProducto(res[0]);})               /* FUNCIONES QUE CAPTURAN LA RESPUESTA */
      .catch((error)=> alert(error))                      /* SI ES EXITOSA .then. A partir de eso se utiliza el Hook de estado para poder mapear los datos obtenidos */
      .finally(()=>setLoading(false))                     /* SI ES FALLA .catch */
  }, []);

  return (
    <>
        {loading ? <p>Cargando..</p> : <ItemDetail producto={producto} />}
    </>
  )
}
