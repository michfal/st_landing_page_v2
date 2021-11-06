import React from 'react'
import { Link } from 'react-scroll'

import './footer.scss'

const year = new Date().getFullYear()

const Footer = () => {
    return (
        <footer className="footer">
            <Link className="footer__element footer__link txt_purple txt_purple--footer" activeClass="active" to="offer" spy={true} smooth={true} duration={1000}>
                    Oferta
            </Link>
            <h4 className="footer__element txt_purple txt_purple--footer">Copyright {year} Michał Fal</h4>
        </footer>
    )
}

export default Footer