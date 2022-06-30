import React, { useEffect, useState } from 'react'
import { ondAddActive } from '../../helpers/onAddActive';
import { Image } from 'react-bootstrap';
import './itemCount.css';

export const ItemCount = ({producto, OnAdd}) => {

    
      const [count, setCount] = useState(1);

      function capCount(){
        OnAdd(count);
        }
    
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
              ? (<button onClick={capCount} className="onAdd"> 
                  <span className='text'> Agregar al carrito </span>
                  <i className="icon">
                  { producto.categoria === "Nintendo" ?
                    <Image src="../img/check-nintendo.png" />
                    : producto.categoria === "XBOX" ?
                    <Image src="../img/check-xbox.png" />
                    :
                    <Image src="../img/check-ps4.png" />
                  }
                  </i>
                </button>) 
              : (<button disabled className="onAdddisabled">Agregar al carrito</button>)}
          </div>
        </>
      );
    }


    export default ItemCount