import React from "react"

import "./paragraph_text.scss"

export const ParagraphText = ({ align, paragraph }) => {
  const content = paragraph !== undefined

  return (
    <>
      {content &&
        <p className={`txt_purple txt_purple--regular paragraph_text ${align}`}>
          {paragraph}
        </p>
      }
    </>
  )
}
