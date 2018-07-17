const front3 = (word) => {
  return `${word.slice(0, 3)}${word.slice(0, 3)}${word.slice(0, 3)}f`
}

console.log(front3('Java'))
console.log(front3('Chocolate'))
console.log(front3('abc'))