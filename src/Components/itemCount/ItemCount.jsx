import React, { useEffect, useState } from 'react'
import './itemCount.css';

export const ItemCount = ({stock}) => {

    const productos = [
        {
          id: 1,
          nombre: 'remera',
          precio: 100,
          stock: 15,
        },
        {
          id: 2,
          nombre: 'buzo',
          precio: 250,
          stock: 10,
        },
        {
          id: 3,
          nombre: 'chaleco',
          precio: 500,
          stock: 5,
        },
      ];
    
      const [count, setCount] = useState(1);
    
      function sumar() {
        if (count < productos[0].stock) {
          setCount(count + 1);
        }
      }
    
      function restar() {
        if (count > 0) {
          setCount(count - 1);
        }
      }
    
      return (
        <div className="containerContador">
          <div className="contador">
            <button onClick={restar} className="obj restar">
              -
            </button>
            <p className="obj">{count}</p>
            <button onClick={sumar} className="obj sumar">
              +
            </button>
          </div>
          {count > 0 
          ? (<button className="onAdd"> Agregar al carrito</button>) 
          : (<button disabled className="onAdddisabled">{' '}Agregar al carrito{' '}</button>
          )}
          {/*       <p>{productos.map((prod) => prod.stock)}</p> */}
        </div>
      );
    }
