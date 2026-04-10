import checkAnswer from '../functions.js'
export const gcd = (name) => {
  console.log('Find the greatest common divisor of given numbers.')
  for (let i = 0; i < 3; i++) {
    let firstNumber = Math.floor(Math.random() * (100 - 0) + 0) // NOSONAR
    let secondNumber = Math.floor(Math.random() * (100 - 0) + 0) // NOSONAR
    const saveFNumber = firstNumber
    const saveSNumber = secondNumber

    let correctAnswer
    if (secondNumber !== 0) {
      while (secondNumber !== 0) {
        let save = secondNumber
        secondNumber = firstNumber % secondNumber
        firstNumber = save
      }
      correctAnswer = firstNumber
    }
    if (checkAnswer(`${saveFNumber} ${saveSNumber}`, String(correctAnswer), i, name) === false) {
      return
    }
  }
}
