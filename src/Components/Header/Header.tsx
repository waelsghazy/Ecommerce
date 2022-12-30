import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    const img = 'https://i.pinimg.com/originals/6b/38/d5/6b38d522fb7aa4be68c6ee37b4b819f0.jpg'
    return (
        <Container className='my-4 py-4'>
            <Row className='gy-4'>
                <Col
                    lg={6}
                    md={12}
                    sm={1}
                >
                    <img src={img} alt="" className='w-100' />
                </Col>
                <Col
                    lg={6}
                    md={12}
                    sm={1}
                >
                    <h1 
                        className='mb-5'
                    >
                        SUMMER SALE
                    </h1>
                    <h4 
                        style={{lineHeight: '2.4rem', marginBottom: '2rem'}}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Error optio maiores officiis voluptas delectus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Error optio maiores officiis voluptas delectus.
                    </h4>
                    <Link 
                        className='btn btn-outline-primary' 
                        to='products'
                    >
                        Shop Now
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Header