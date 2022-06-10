import React, { useEffect, useState } from 'react'

function ItemList({listaProductos}) {

  return (
    <div>
      <h1>Lista Productos</h1>
        {listaProductos.map((producto) => (
          <li key={producto.id}>{producto.nombre} 
          </li>
        ))}
    </div>
    
  );
}

export default ItemList