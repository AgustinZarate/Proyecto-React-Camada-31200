import React from 'react'
import './item.css'
import { Card,CardBody,CardTitle,CardSubtitle,CardText,Button,CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Col, Image } from 'react-bootstrap';

const Item = ({producto, clase}) => {
  return (
    <>
        <Col className='item' md={4}>
          <Card className='card m-2'>
              <div className={`circle ${clase}`}></div>
              <div className="content">
                <h2>{producto.nombre}</h2>
                <p>{producto.categoria}</p>
                <p>${producto.precio}</p>
                <Link to={`/detalle/${producto.id}`}>
                  View More
                </Link>
              </div>
              <div className='image-content'>
                <Image className='img-product' src={`/${producto.img}`} alt={`portada ${producto.nombre}`}/>
                {producto.descuento ?
                  <Image className='descuento' src="../img/oferta-especial.png"/>
                  : ''
                }
                {producto.recomendado ?
                  <Image className='recomendado' src="../../img/recomendado.png" />
                  : ''
                }
              </div>
          </Card>
        </Col>
    </>
  )
}

export default Item