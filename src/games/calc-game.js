import checkAnswer from '../functions.js'
export const calculate = (name) => {
  console.log('What is the result of the expression?')
  let operations = ['+', '-', '*']
  for (let i = 0; i < 3; i++) {
    let firstNumber = Math.floor(Math.random() * (100 - 1) + 1) // NOSONAR
    let secondNumber = Math.floor(Math.random() * (100 - 1) + 1) // NOSONAR
    let randomOperations = operations[Math.floor(Math.random() * operations.length)] // NOSONAR
    let correctAnswer
    if (randomOperations === '+') {
      correctAnswer = firstNumber + secondNumber
    }
    else if (randomOperations === '-') {
      correctAnswer = firstNumber - secondNumber
    }
    else if (randomOperations === '*') {
      correctAnswer = firstNumber * secondNumber
    }
    if (checkAnswer(`${firstNumber} ${randomOperations} ${secondNumber}`, String(correctAnswer), i, name) === false) {
      return
    }
  }
}
