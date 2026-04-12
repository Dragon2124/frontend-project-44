import checkAnswer from '../functions.js'

export const progression = (name) => {
  console.log('What number is missing in the progression?')

  for (let i = 0; i < 3; i += 1) {
    const start = Math.floor(Math.random() * 20)
    const step = Math.floor(Math.random() * 10) + 1
    const length = Math.floor(Math.random() * 6) + 5
    const hiddenIndex = Math.floor(Math.random() * length)

    const progressionArray = []
    for (let j = 0; j < length; j += 1) {
      progressionArray.push(start + j * step)
    }

    const correctAnswer = progressionArray[hiddenIndex]
    progressionArray[hiddenIndex] = '..'

    const question = progressionArray.join(' ')

    if (checkAnswer(question, String(correctAnswer), i, name) === false) {
      return
    }
  }
}
