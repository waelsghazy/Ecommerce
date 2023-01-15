import React from 'react';
import ProductCard from '../ProductsCard/ProductCard';
import { Container } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PopularList } from '../../Data/Data';

const Popular = () => {
    const responsive = {
    superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
    },
    desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
    },
    tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
    },
    mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
    }
};
    return (
        <Container className='m-auto'>
            <Carousel 
                className='py-4'
                responsive={responsive}
                draggable={true}
                showDots={true}
                removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
                
            >
                {PopularList.map((popular) => (
                    <ProductCard {...popular} key={popular.id} />
                ))}
            </Carousel>
        </Container>
    )
}

export default Popular