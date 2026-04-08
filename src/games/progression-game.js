import checkAnswer from '../functions.js'
export const progression = (name) => {
  console.log('What number is missing in the progression?')
  let correctAnswer
  for (let i = 0; i < 3; i++) {
    let start = Math.floor(Math.random() * 11) // NOSONAR
    let index = Math.floor(Math.random() * (6 - 1) + 1) // NOSONAR
    let step = Math.floor(Math.random() * (6 - 1) + 1) // NOSONAR
    let length = Math.floor(Math.random() * (11 - 5) + 5) // NOSONAR
    let hiddenItem = Math.floor(Math.random() * (length - 0) + 0) // NOSONAR
    const arr = []
    for (let j = 0; j < length; j++) {
      let curElement = start + index * step
      arr.push(curElement)
      index += step
    }
    correctAnswer = arr[hiddenItem]
    arr[hiddenItem] = '..'

    if (checkAnswer(`${arr.join(' ')}`, String(correctAnswer), i, name) === false) {
      return
    }
  }
}
