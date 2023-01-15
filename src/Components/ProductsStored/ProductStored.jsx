import React, { useState, useEffect } from 'react';
import { ProductsList } from '../../Data/Data';
import ProductCard from '../ProductsCard/ProductCard';
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';

const ProductStored = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        setData(ProductsList);
        ;
    }, [])
    const categoryFilter = (itemData) => {
        const filterData = ProductsList.filter((item) => item.category === itemData)
        setData(filterData)
    }
    return (
        <Container className='mt-4 d'>
            <div className="d-flex justify-content-center">
            <ButtonGroup className='my-5'>
                <Button onClick={() => setData(ProductsList)}>All</Button>
                <Button onClick={() => categoryFilter('men')}>Men</Button>
                <Button onClick={() => categoryFilter('women')}>Women</Button>
                <Button onClick={() => categoryFilter('shoes')}>Shoes</Button>
                <Button onClick={() => categoryFilter('accessories')}>Accessories</Button>
            </ButtonGroup>
            </div>
            <Row 
                className='gy-4'
            >
                {data.map((product) => (
                    <Col 
                        key={product.id}
                        lg={4}
                        md={6}
                        sm={1}
                    >
                        <ProductCard {...product}  />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ProductStored