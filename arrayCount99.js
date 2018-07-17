/* Given an array of ints, return the number of 9's in the array.
*/

const arrayCount9 = (list) => {
  // let count = 0
  // for (let i = 0; i < list.length; i++) {
  //   if( list[i] > 10) {
  //     list[i].toString().split('')
  //   }
  //   for (let j = 0; j < list[i].length; j++) {
  //     if (list[i][j] === 9) {
  //       count++
  //     }
  //   }
  // }
  // return count

  const count = list.reduce((total, currentVal) => {
    if (currentVal === 9) {
      total.push(9)
    }
    return total
  }, [])
  console.log(count)
  return count.length

  // return list.filter((val) => {
  //   return val === 9
  // }).length
}

console.log(arrayCount9([1, 2, 9]))
console.log(arrayCount9([1, 9, 9]))
console.log(arrayCount9([1, 9, 9, 99, 3, 9]))
