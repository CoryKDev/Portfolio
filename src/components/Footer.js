import React from 'react';


const Footer = ({ text }) => {
    return (
        <footer className="footer mt-auto text-center py-3 bg-dark text-light">
            {text}
        </footer>
    )
}

Footer.defaultProps = {
    text: 'Cory Keelan Profile 2021'

}

export default Footer;