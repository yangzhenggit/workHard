function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function shuffle(arr) {
  const _arr = arr.slice()
  for (let i = 0; i < arr._length; i ++) {
    let j = getRandomInt(0, i)
  }
}
