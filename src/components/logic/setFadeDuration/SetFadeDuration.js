export const SetFadeDuration = (size) => {
    console.log(size)
    const duration = {
        'large': 1000,
        'medium': 1000,
        'small': 0
    }
    return duration[size]
}

// export default SetFadeDuration