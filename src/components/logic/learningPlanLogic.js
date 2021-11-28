//This function returns color of a bulletpoint in learning plan.
//It takes in the index of a PlanItem and returns a color based on its index.
//By deffault all points are set to blue
export const setColor = i => {
  //We always start from 1 not item index
  const number = i + 1
  //green points are (3, 6, 9...) they are always dividable by 3
  if (number % 3 === 0) {
    return "point_green"
  }
  //violet points always come before green ones. So if we add 1 to them they will be dividable by 3
  if ((number + 1) % 3 === 0) {
    return "point_violet"
  }
}
