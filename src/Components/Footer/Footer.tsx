import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { BsFacebook, BsTelephoneFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer 
            style={{
                    backgroundColor: '#ccc', marginTop: '2rem',  padding: '2rem 0', width: '100%'
                }}
            >
            <Container>
                <Row className='gy-4'>
                    <Col
                        lg={4}
                        md={6}
                        sm={1}
                    >
                        <h3>Social Media</h3>
                        <div 
                            className="d-flex"
                            style={{fontSize: '2rem'}}
                        >
                            <AiFillTwitterCircle className='me-2 icon' />
                            <AiFillInstagram className='me-2 icon' />
                            <BsFacebook className='icon' />
                        </div>
                    </Col>
                    <Col
                        lg={4}
                        md={6}
                        sm={1}
                    >
                        <h3>Pages</h3>
                        <div className="d-flex flex-column">
                            <Link 
                                to='' 
                                style={{textDecoration: 'none',color: 'black'}}
                                className='link'
                            >
                                Home
                            </Link>
                            <Link 
                                to='products'
                                style={{textDecoration: 'none',color: 'black'}}
                                className='link'
                            >
                                Products
                            </Link>
                            <Link 
                                to='contact'
                                style={{textDecoration: 'none',color: 'black'}}
                                className='link link1'
                            >
                                Contact
                            </Link>
                        </div>
                    </Col>
                    <Col
                        lg={4}
                        md={6}
                        sm={1}
                    >
                        <h3>Contact</h3>
                        <div className="d-flex flex-column">
                            <div className="d-flex my-2 align-items-center">
                                <BsTelephoneFill />
                                <span className='text-muted mx-2'>02-12345678910</span>
                            </div>
                            <input 
                                type="email" 
                                placeholder='Enter Your Email' 
                                
                                style={{
                                    background: `white`,
                                    border: '1px solid black',
                                    outline: 'none',
                                    padding: '0.6rem 2rem',
                                    color: 'black',
                                    fontSize: '1.5rem',
                                    width: '100%',
                                    margin: 'auto',
                                    borderRadius: '1.5rem'
                                }}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer