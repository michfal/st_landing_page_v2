import React from "react"

import "./ovalHeader.scss"

export const OvalHeader = ({ headerText, bgColor, width }) => {

  return (
    <h4 className={`oval_header txt_white txt_white--oval_header ${bgColor} ${width ? width : ""}`}>
      {headerText}
    </h4>
  )
}
