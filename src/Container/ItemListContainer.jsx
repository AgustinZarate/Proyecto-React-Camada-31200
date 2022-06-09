import React, { useEffect, useState } from 'react'
import { ItemCount } from '../Components/itemCount/ItemCount'


function ItemListContainer({mensaje}) {


  return (
    <>
    <h2 style={{color: "red" }} >{mensaje}</h2>
    <ItemCount />
    </>
  )
}

export default ItemListContainer