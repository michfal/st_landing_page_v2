import React from "react"
import clsx from "clsx"

import "./ovalHeader.scss"

export const OvalHeader = ({ headerText, bgColor, width }) => {

  return (
    <h4 className={clsx("oval_header", "txt_white", "txt_white--oval_header", bgColor, width)}>
      {headerText}
    </h4>
  )
}
