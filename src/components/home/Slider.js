import React from 'react'

import { Carousel } from 'antd'

const Slider = () => {
    return (
        <Carousel effect='scrollx' autoplay={true}>
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
        </Carousel>
    )
}

export default Slider

const contentStyle = {
    height: '300px',
    color: '#001529',
    lineHeight: '300px',
    textAlign: 'center',
    background: '#e6edf2'
}