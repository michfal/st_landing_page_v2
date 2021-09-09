import React from 'react'

import elementaryIcon from '../../../images/icon_elementary.svg'
import contestIcon from '../../../images/icon_contest.svg'
import finalsIcon from '../../../images/icon_finals.svg'
import currentIcon from '../../../images/icon_current.svg'

import './offer.scss'

const Offer = () => {
    return (
        <section className="offer">
            <h1 className="offer__header txt_purple">Oferuję korepetycje z matematyki, pod kątem:</h1>
            <div className="offer__list">
                <div className="offer__list_element">
                    <img className="element_icon" src={elementaryIcon} alt="elementary icon"></img>
                    <h2 className="offer__list_element_text txt_purple txt_purple--point">Egzaminu <br/> 8-klasisty</h2>
                </div>
                <div className="offer__list_element">
                    <img className="element_icon" src={contestIcon} alt="contest icon"></img>
                    <h2 className="offer__list_element_text txt_purple txt_purple--point">Egzaminu <br/> Maturalnego</h2>
                </div>
                <div  className="offer__list_element">
                    <img className="element_icon" src={finalsIcon} alt="finals icon"></img>
                    <h2 className="offer__list_element_text txt_purple txt_purple--point">Przygotowania <br/> do konkursów</h2>
                </div>
                <div className="offer__list_element">
                    <img className="element_icon" src={currentIcon} alt="current icon"></img>
                    <h2 className="offer__list_element_text txt_purple txt_purple--point">Bierzącego <br/> Materiału</h2>
                </div>
            </div>
        </section>
    )
}

export default Offer