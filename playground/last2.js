/*
Given a string, return the count of the number of times that a substring
length 2 appears in the string and also as the last 2 chars of the string,
so "hixxxhi" yields 1 (we won't count the end substring).
*/

const last2 = (word) => {
  const last = word.slice(word.length - 2)
  let count = 0
  for (let i = 0; i < word.length - 2; i++) {
    if (last === `${word[i]}${word[i + 1]}`) {
      count += 1
    }
  }
  return count
}

console.log(last2('hixxhi')) // 1
console.log(last2('xaxxaxaxx')) // 1
console.log(last2('axxxaaxx')) // 2
