import React from 'react'

import './footer.scss'

const year = new Date().getFullYear()

const Footer = () => {
    return (
        <footer className="footer">
            <h4 className="footer__element txt_purple txt_purple--footer">Oferta</h4>
            <h4 className="footer__element txt_purple txt_purple--footer">Copyright {year} Michał Fal</h4>
        </footer>
    )
}

export default Footer