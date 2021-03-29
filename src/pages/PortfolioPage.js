import React from 'react'
import "../css/Portfolio.css"
//import component here
import Cards from '../components/ProjectCards'



const PortfolioPage = () => {
    return (
        <div className="Portfolio-container">
            <div className="layer">
            <Cards />
            </div>
        </div>
    )
}

export default PortfolioPage
