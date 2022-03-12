import React from 'react'
import ManagementPage from './ManagementPage'
import NewsPage from './NewsPage'
import Slider from '../components/home/Slider'
import Description from './DescriptionPage'
import PartnersPage from './PartnersPage'

const MainPage = () => {
    return (
        <div>
            <Slider />
            <NewsPage />
            <Description />
            <ManagementPage />
            <PartnersPage />
        </div>
    )
}

export default MainPage