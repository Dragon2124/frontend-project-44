import checkAnswer from '../functions.js'

export const question = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1

    const correctAnswer = (number % 2 === 0) ? 'yes' : 'no'

    if (checkAnswer(number, correctAnswer, i, name) === false) {
      return
    }
  }
}
