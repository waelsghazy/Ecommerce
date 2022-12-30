import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineMail, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { BsFacebook, BsTelephoneFill } from 'react-icons/bs';


const ContactList = () => {
    return (
        <Container className='py-4'>
            <Row className='gy-4'>
                <Col
                    md={6}
                    sm={1}
                >
                    <h3 className='contact-header'>Send Message Us</h3>
                    <div className="contact-input d-flex flex-column">
                        <input 
                            type="text" 
                            className='form-control my-2'
                            placeholder='Enter ypur name' 
                        />
                        <input 
                            type="email" 
                            className='form-control my-2' 
                            placeholder='Enter your E-mail'
                        />
                        <input 
                            type="number" 
                            className='form-control my-2' 
                            placeholder='Enter your phone'
                        />
                        <textarea 
                            className='px-2'
                            cols={30} 
                            rows={10}
                            placeholder='Enter your message'
                        >
                        </textarea>
                    </div>
                </Col>
                <Col
                    md={6}
                    sm={1}
                >
                    <h3 className='mb-5 contact-header'>Get In Touch</h3>
                    <div className="contact-text">
                        <p 
                            className='text-muted'
                            style={{lineHeight: '2rem'}}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at. 
                            Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis mollitia 
                            inventore?.
                        </p>
                        <div className="contact-icons d-flex flex-column">
                            <div className='my-2'>
                                <BsTelephoneFill />
                                <span className='ms-2'>02-12345678910</span>
                            </div>
                            <div>
                                <AiOutlineMail />
                                <span className='ms-2'>contact@example.com</span>
                            </div>
                        </div>
                        <div 
                            className="icons my-2"
                            style={{fontSize: '2rem'}}
                        >
                            <BsFacebook className='me-2 icon' />
                            <AiFillTwitterCircle className='me-2 icon' />
                            <AiFillInstagram className='icon' />
                        </div>
                    </div>
                </Col> 
            </Row>
        </Container>
    )
}

export default ContactList