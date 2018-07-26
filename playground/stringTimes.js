const stringTimes = (word, num) => {
  let apple = '';
  Array(num).fill().forEach(() => {
    apple += word
  })
  return apple
}

console.log(stringTimes('Hi', 3))
console.log(stringTimes('Hi', 2))
console.log(stringTimes('Hi', 1))
