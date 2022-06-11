import React from 'react'
import './item.css'
import { Card,CardBody,CardTitle,CardSubtitle,CardText,Button,CardImg } from 'reactstrap';

const Item = ({producto}) => {
  return (
    <>
      <div className='col-md-4'>
            <Card>
              <CardBody>
                <CardImg alt="Card image cap" src={producto.img} top width="100%" className='img-product'/>
                <CardTitle tag="h5" className='m-3'>
                  {producto.nombre}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {producto.categoria}
                </CardSubtitle>
                <Button>
                  Ver Mas
                </Button>
              </CardBody>
            </Card>
      </div>
    </>
  )
}

export default Item