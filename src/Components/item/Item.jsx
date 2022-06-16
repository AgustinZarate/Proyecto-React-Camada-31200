import React from 'react'
import './item.css'
import { Card,CardBody,CardTitle,CardSubtitle,CardText,Button,CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
  return (
    <>
      <div className='item col-md-4'>
            <div className="card m-2">
              <div className="circle"></div>
              <div className="content">
                <h2>{producto.nombre}</h2>
                <p>{producto.categoria}</p>
                <p>${producto.precio}</p>
                <Link to={`/detalle/${producto.id}`}>
                  View More
                </Link>
              </div>
                <img className='img-product' src={producto.img} alt=""/>
              </div>
      </div>
    </>
  )
}

export default Item