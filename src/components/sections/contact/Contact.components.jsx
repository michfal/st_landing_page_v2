import React from 'react'
import OvalHeader from '../../ovalHeader/OvalHeader.component'
import atIcon from '../../../images/icon_at.svg'
import phoneIcon from '../../../images/icon_phone.svg'

import './contact.scss'

const Contact = () => {
    return (
        <section className="contact">
            <OvalHeader headerText="Kontakt" bgColor="background-blue" width="oval_header--narrow"/>
            <div className="contact__info">
                <div className="contact__info_element">
                    <img className="contact__info_icon" src={atIcon} alt="at icon"></img>
                    <p className="contact__info_txt txt_purple txt_purple--regular">jfal@op.pl</p>
                </div>
                <div className="contact__info_element">
                    <img className="contact__info_icon" src={phoneIcon} alt="at icon"></img>
                    <p className="contact__info_txt txt_purple txt_purple--regular">500 076 750</p>
                </div>
            </div>
        </section>
    )
}

export default Contact