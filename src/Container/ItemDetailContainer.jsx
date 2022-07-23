import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../Components/itemDetail/ItemDetail';
import { doc, getDoc, getFirestore} from 'firebase/firestore'
import Spinner from '../Components/spiner/Spinner';

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true)
  const {itemId} = useParams()

  useEffect(() => {
    //pedir un solo producto desde Firebase
    const db = getFirestore()
      const queryProduct = doc(db, 'productos', itemId)
      getDoc(queryProduct)
      .then(resp => setProducto({Id: resp.id, ...resp.data()}))
      .catch((error)=> alert(error))                     
      .finally(()=>setLoading(false))                     
  }, [itemId]);

  return (
    <>
        {loading ? <Spinner /> : <ItemDetail producto={producto} />}
    </>
  )
}
