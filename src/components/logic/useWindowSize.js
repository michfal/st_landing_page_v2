import { useState, useEffect } from "react"

export const nameWindowSize = (width) => {

    if (width >= 1024) return "large"
    if (width >= 750) return "medium"
    if (width < 750) return "small"
  }

export const useWindowSize = () => {
    // const [width, setWidth] = useState([window.innerWidth])
    const [width, setWidth] = useState()

    useEffect(() => {

      setWidth(window.innerWidth)

      const handleResize = () => {
        setWidth(window.innerWidth)
      }

      window.addEventListener("resize", handleResize)
      return () => {
          window.removeEventListener("resize", handleResize)
      }
    }, [])

    const widthName = nameWindowSize(width)
    return widthName
  }