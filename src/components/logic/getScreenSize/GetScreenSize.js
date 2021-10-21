 const GetScreenSize = () => {
    const width = window.innerWidth
    // console.log(width)
    if (width >= 1024) return 'large'
    if (width >= 750) return 'medium'
    if (width < 750) return 'small'
    
}

export default GetScreenSize