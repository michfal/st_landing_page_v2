export const getScreenSize = () => {
  const width = window.innerWidth
  if (width >= 1024) return "large"
  if (width >= 750) return "medium"
  if (width < 750) return "small"
}

