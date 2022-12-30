import React from 'react';
import { ProductsList } from '../../Data/Data';
import ProductCard from './ProductsCard/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';


const ProductStored = () => {
    return (
        <Container className='mt-4'>
            <Row 
                className='gy-4'
                
            >
                {ProductsList.map((product) => (
                    <Col 
                        key={product.id}
                        lg={4}
                        md={6}
                        sm={1}
                    >
                        <ProductCard {...product} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ProductStored