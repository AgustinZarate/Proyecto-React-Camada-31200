import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../Components/itemDetail/ItemDetail';
import Spinner from '../Components/spiner/Spinner';
import { pedirDatos } from '../helpers/pedirDatos';
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where} from 'firebase/firestore'

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true)
  

  const {itemId} = useParams()

  let condition = true;

  useEffect(() => {
    //pedir un solo producto desde Firebase
    const db = getFirestore()
      const queryProduct = doc(db, 'productos', itemId)
      getDoc(queryProduct)
      .then(resp => setProducto({Id: resp.id, ...resp.data()}))
/*       .then((res) => {setProducto(res.find((prod)=> prod.id === Number(itemId)));})*/ 
      .catch((error)=> alert(error))                     
      .finally(()=>setLoading(false))                     
  }, [itemId]);

  return (
    <>
        {loading ? <Spinner /> : <ItemDetail producto={producto} />}
    </>
  )
}
