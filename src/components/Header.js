/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Typed from 'react-typed';
import '../css/Header.css';

const Header = () => {
    return (

        <div className="header-wrapper">
            <div className="main-info">
                <h1>Front End Developer and Web Designer</h1>
                <Typed 
                    className="typed-text"
                    strings={["Web Design",
                     "Front End Development",
                      "UX/UI"]}
                    typeSpeed={40}
                    backSpeed={35}
                    loop
                />

                <a href="/ContactPage" className="btn-main-contact">Contact Me</a>
            </div>
        </div>

    )
}

export default Header
