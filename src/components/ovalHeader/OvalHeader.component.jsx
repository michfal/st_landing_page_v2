import React from "react"

import "./ovalHeader.scss"

const OvalHeader = props => {
  const { headerText, bgColor, width } = props

  return (
    <h4 className={`oval_header txt_white ${bgColor} ${width ? width : ""}`}>
      {headerText}
    </h4>
  )
}

export default OvalHeader
