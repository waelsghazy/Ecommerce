import React from 'react'

type TestimonialListProps = {
    id: number
    name: string
    quote: string
}

const TestimonialList = ({id, name, quote}: TestimonialListProps) => {
    return (
        <div className='d-flex flex-column text-center mt-5 py-5 bg-white'>
            <h2>{name}</h2>
            <p className='text-muted mx-5'>{quote}</p>
        </div>
    )
}

export default TestimonialList