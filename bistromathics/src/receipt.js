/**
 * This function will apply 9% tax and 15% tip to the subtotal and return it.
 * @param {Number} subtotal Is a number that will be turned into the total
 * @param {Number} tax
 * @param {Number} tip
 * @returns {Number} Returns the total
 */
export const receipt = (subtotal, tax, tip) => {
  return (subtotal * (1 + (tax / 100)) * (1 + (tip / 100))).toFixed(2)
}
