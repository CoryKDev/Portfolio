import React from 'react'
import Typed from 'react-typed';

const Header = () => {
    return (

        <div className="header-wrapper">
            <div className="main-info">
                <h1>Front End Web Developer and Web Designer</h1>
                <Typed 
                    className="typed-text"
                    strings={["Web Design",
                     "Front End Web Development",
                      "UX/UI"]}
                    typeSpeed={40}
                    backSpeed={35}
                    loop
                />

                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>

    )
}

export default Header
