import { Typography } from 'antd'
import React from 'react'

const TitleText = ({ text }) => {
    return(
        <Typography.Title level={2} style={titleStyle}>
            {text}
        </Typography.Title>
    )
}

export default TitleText

const titleStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin:'5px',
}