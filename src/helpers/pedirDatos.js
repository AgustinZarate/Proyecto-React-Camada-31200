import {productos} from '../data/data.js'

export const pedirDatos = (res) => {
    return new Promise((resolve, reject) => {
      if(res) {
        setTimeout(()=>{
          resolve(productos)             /* La funcion pedirDatos es una PROMESA que espera una respuesta */
        }, 1500)                        /* si la respuesta es favorable se almacena en la propiedad RESOLVE  */
      }else{                             /* si es denegada se almacena en la propiedad REJECT */
        setTimeout(()=>{
          reject('404')
        }, 2000)
      }
    })
  }