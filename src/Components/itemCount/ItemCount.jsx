import React, { useEffect, useState } from 'react'
import './itemCount.css';

export const ItemCount = ({producto}) => {
      const [count, setCount] = useState(1);
    
      function sumar() {
        if (count < producto.stock) {
          setCount(count + 1);
        }
      }
    
      function restar() {
        if (count > 0) {
          setCount(count - 1);
        }
      }
    
      return (
        <>
          <div className="containerContador">
            <div className="contador">
              <button onClick={restar} className="obj restar">
                -
              </button>
              <p className="obj number">{count}</p>
              <button onClick={sumar} className="obj sumar">
                +
              </button>
            </div>
          </div>
          <div>
            {count > 0 
              ? (<button className="onAdd"> Agregar al carrito</button>) 
              : (<button disabled className="onAdddisabled">{' '}Agregar al carrito{' '}</button>)}
          </div>
        </>
      );
    }


    export default ItemCount