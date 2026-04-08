import checkAnswer from '../functions.js'
export const prime = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1
    let correctAnswer = 'yes'

    if (number < 2) {
      correctAnswer = 'no'
    }
    else {
      for (let j = 2; j <= Math.sqrt(number); j += 1) {
        if (number % j === 0) {
          correctAnswer = 'no'
          break
        }
      }
    }

    if (checkAnswer(number, correctAnswer, i, name) === false) {
      return
    }
  }
}
