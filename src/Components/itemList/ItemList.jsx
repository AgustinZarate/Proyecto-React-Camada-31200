import React, { useEffect, useState } from 'react'
import Item from '../item/Item';

function ItemList({listaProductos}) {
  return (
    <>
    <div>
      <h3 className='m-5'>Lista Productos</h3>
      <div className='row'>
        {listaProductos.map((producto) => <Item producto={producto} key={producto.id} />)}
      </div>
    </div>
    </>
    
  );
}



export default ItemList