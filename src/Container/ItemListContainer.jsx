import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemCount } from '../Components/itemCount/ItemCount'
import ItemList from '../Components/itemList/ItemList'
import Spinner from '../Components/spiner/Spinner'
import { pedirDatos } from '../helpers/pedirDatos'
import './itemListContainer.css'
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where} from 'firebase/firestore'

function ItemListContainer({}) {
  const [listaProductos, setListaProductos] = useState([]);
  /* Linea nueva */ const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

const [bool, setBool] = useState(true)



    useEffect( ()=> {
      const db = getFirestore()
      const queryProduct = doc(db, 'productos', "3fp1iKMirywE3HVzstax")
      getDoc(queryProduct)
      .then(resp => setProductos({Id: resp.id, ...resp.data()}))
    }, [bool])

    console.log(productos)


  const {catId} = useParams()
  console.log(catId)

  useEffect(() => {
        //Traer todos los productos de la misma categoria
    if(catId){
      const db = getFirestore()
      const queryCollection = collection(db, 'productos')
      const queryCollectionFilter = query(queryCollection, where('categoria','==', catId) )
      getDocs(queryCollectionFilter)
      .then(data => setListaProductos(data.docs.map(item => ({id: item.id, ...item.data()}) ) ) )
      .catch((error)=> alert(error))
      .finally(()=>setLoading(false))

    //Traer todos los productos
    }else{
      const db = getFirestore()
      const queryCollection = collection(db, 'productos')
      getDocs(queryCollection)
      .then(data => setListaProductos(data.docs.map(item => ({id: item.id, ...item.data()}) ) ) )
      .catch((error)=> alert(error))  
      .finally(()=>setLoading(false))
    }
  }, [catId]);


  
  return (
    <>
      <div className='itemList'>
        {loading ? <Spinner /> : <ItemList listaProductos={listaProductos} />}
      </div>
    </>
  )
}

export default ItemListContainer