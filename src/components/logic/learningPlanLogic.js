export const setColor = i => {
  const number = i + 1
  if (number % 3 === 0) {
    return "point_green"
  }
  if ((number + 1) % 3 === 0) {
    return "point_violet"
  }
}

export const planOpen = (e) => {
  const content = e.target.parentNode.childNodes[1]
  const arrow = e.target.childNodes[0]

  content.classList.toggle("learning_plan_display")
  arrow.classList.toggle("lp_arrow_rotate")
}