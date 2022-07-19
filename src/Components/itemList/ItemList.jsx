import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import Item from '../item/Item';

function ItemList({listaProductos}) {
  console.log(listaProductos[0].id)
  return (
    <>
    <div>
      <h3 className='m-5'>Lista Productos</h3>
        <Row >  
          {
          listaProductos.map((producto) =>
            producto.categoria === "PS4" ?
            <Item clase={"circle-ps4"} producto={producto} key={producto.id} />
            : producto.categoria === "XBOX" ?
            <Item clase={"circle-xbox"} producto={producto} key={producto.id} />
            :
            <Item clase={"circle-nintendo"} producto={producto} key={producto.id} />
            )}
          
        </Row>
    </div>
    </>
    
  );
}



export default ItemList