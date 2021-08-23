import React from 'react'

import './paragraph_text.scss'

const ParagraphText = ({paragraph}) => {

    const content = paragraph !== undefined

    return (
        <>
            {content ? <p className="txt_purple--dark txt_purple--dark_regular paragraph_text">{paragraph}</p> : null}
        </>
    )
}

export default ParagraphText