import React from 'react';
import { TestimonialData } from '../../Data/Data';
import TestimonialList from './TestimonialList/TestimonialList';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from 'react-bootstrap';


const Testimonial = () => {
    const responsive = {
        all: {
        breakpoint: { max: 4000, min: 0 },
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
                removeArrowOnDeviceType={['all']}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
            >
                {TestimonialData.map((testimonial) => (
                    <TestimonialList {...testimonial} key={testimonial.id} />
                ))}
            </Carousel>
        </Container>
    )
}

export default Testimonial