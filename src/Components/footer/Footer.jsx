import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
return (
    <>
        <div className='footer'>
            <Container>
                <Row>
                    <Col>
                        <Image src=''/>
                    </Col>
                    <Col>
                        <Image src=''/>
                    </Col>
                    <Col>
                        <Image src=''/>
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <h5>© 2022 Developer <a href="https://www.linkedin.com/in/agustinzarate" target="_blank" rel="noopener noreferrer">Agustin Zarate</a> </h5> <br />
                        Otros Proyectos
                    </Col>
                </Row>
            </Container>

        </div>
    </>
)
}

export default Footer