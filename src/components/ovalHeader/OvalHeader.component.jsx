import React from 'react'

import './ovalHeader.scss'



const OvalHeader = (props) => {
    return (
        <div>
            <h4 className={`oval_header txt_white ${props.bgColor}`} >
              {props.headerText}
            </h4>            
        </div>
    )
}

export default OvalHeader