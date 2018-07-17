/* Given a non-empty string like "Code" return a string like "CCoCodCode". */

const stringSplosion = (word) => {
  let a = ''
  for (let i = 0; i <= word.length; i++) {
    a += word.substring(0, i)
  }

  return a
}

console.log(stringSplosion('Code'))
console.log(stringSplosion('abc'))
console.log(stringSplosion('ab'))
