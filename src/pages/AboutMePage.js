import React from 'react'
import Cards from '../components/Cards';
import ProfilePic from '../components/ProfilePic';
import '../css/About.css'

const AboutMePage = () => {
    return (
        <div className="about-wrapper">
        <div className="bg-layer">
        <ProfilePic />
            <Cards />
            </div>
        </div>
        
    )
}

export default AboutMePage
