import checkAnswer from '../functions.js'

export const calculate = (name) => {
  console.log('What is the result of the expression?')
  const operations = ['+', '-', '*']

  for (let i = 0; i < 3; i += 1) {
    const num1 = Math.floor(Math.random() * 100) + 1
    const num2 = Math.floor(Math.random() * 100) + 1
    const operator = operations[Math.floor(Math.random() * operations.length)]

    let correctAnswer

    switch (operator) {
      case '+':
        correctAnswer = num1 + num2
        break
      case '-':
        correctAnswer = num1 - num2
        break
      case '*':
        correctAnswer = num1 * num2
        break
      default:
        break
    }

    const question = `${num1} ${operator} ${num2}`

    if (checkAnswer(question, String(correctAnswer), i, name) === false) {
      return
    }
  }
}
