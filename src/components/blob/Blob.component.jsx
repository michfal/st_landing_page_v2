import React from "react"

import "./blob.scss"

const Blob = props => {
  const { color, position } = props

  return (
    <svg
      className={`blob ${position}`}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 197 187"
    >
      <defs />
      <g transform="matrix(1 0 0 1.99699 -3260 -325.29)">
        <path
          className={`blob_path ${color}`}
          id="blob"
          fill="#f4f1fe"
          d="M783.67 2621.12c2.415-22.02-7.712-43.38-25.306-53.37-41.533-23.58-117.429-66.66-162.492-92.24-22.654-12.87-49.572-11.81-71.378 2.79-22.22 14.88-51.039 34.17-74.172 49.66-24.943 16.7-40.538 46.64-41.309 79.31l-2.673 113.21c-.581 24.61 11.616 47.35 31.229 58.22l142.276 78.88c8.648 4.79 18.798 4.7 27.378-.24 19.643-11.32 57.275-33 91.185-52.54 43.472-25.05 73.092-72.73 79.078-127.31l6.184-56.37z"
          transform="matrix(.5114 0 0 .22741 3053.55 -395.273)"
        />
      </g>
    </svg>
  )
}

export default Blob
