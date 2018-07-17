const stringBits = (word) => {
  return word.split('').map((letter, index) => index % 2 === 0 ? letter : '').join('')
}

console.log(stringBits('Hello'))
console.log(stringBits('Hi'))
console.log(stringBits('Heeololeo'))