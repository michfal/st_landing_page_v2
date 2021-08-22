import React from 'react'

const ParagraphText = ({paragraph}) => {

    const content = paragraph !== undefined

    return (
        <>
            {content ? <p>{paragraph}</p> : null}
        </>
    )
}

export default ParagraphText