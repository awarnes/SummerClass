const stringBits = (word = 'Hello') => {
  let final = ''
  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      final += word[i]
    }
  }
  return final
}

console.log(stringBits('hello'))
console.log(stringBits('hi'))
console.log(stringBits('heeololeo'))
// console.log(stringTimes('hi', 2))
// console.log(stringTimes('hi', 1))
// console.log(front3('Chocolate'))
// console.log(front3('hi'))
