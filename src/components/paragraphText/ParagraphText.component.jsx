import React from "react"

import "./paragraph_text.scss"

const ParagraphText = props => {
  const { align, paragraph } = props
  const content = paragraph !== undefined

  return (
    <>
      {content ? (
        <p className={`txt_purple txt_purple--regular paragraph_text ${align}`}>
          {paragraph}
        </p>
      ) : null}
    </>
  )
}

export default ParagraphText
