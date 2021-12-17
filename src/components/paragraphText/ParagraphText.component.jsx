import React from "react"
import clsx from "clsx"

import * as styles from "./ParagraphText.module.scss"

export const ParagraphText = ({ align, paragraph }) => {
  const content = paragraph !== undefined

  const positions = {
    left: styles.paragraph_text_left,
    right: styles.paragraph_text_right,
  }

  return (
    <>
      {content && (
        <p
          className={clsx(
            "txt_purple",
            "txt_purple--regular",
            styles.paragraph_text,
            positions[align]
          )}
        >
          {paragraph}
        </p>
      )}
    </>
  )
}
