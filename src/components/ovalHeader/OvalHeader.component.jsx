import React from "react"
import clsx from "clsx"

import * as styles from "./OvalHeader.module.scss"

export const OvalHeader = ({ headerText, color, width }) => {

  const bgColors = {
    "green": styles.background_green,
    "blue": styles.background_blue,
    "orange": styles.background_orange
  }

  return (
    <h4 className={clsx(styles.oval_header, "txt_white", "txt_white--oval_header", bgColors[color], width && styles.oval_header_narrow)}>
      {headerText}
    </h4>
  )
}
