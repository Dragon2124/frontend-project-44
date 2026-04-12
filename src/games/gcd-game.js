import checkAnswer from '../functions.js'

const getGcd = (a, b) => {
  let num1 = a
  let num2 = b
  while (num2 !== 0) {
    const temp = num2
    num2 = num1 % num2
    num1 = temp
  }
  return num1
}

export const gcd = (name) => {
  console.log('Find the greatest common divisor of given numbers.')

  for (let i = 0; i < 3; i += 1) {
    const num1 = Math.floor(Math.random() * 100)
    const num2 = Math.floor(Math.random() * 100)

    const question = `${num1} ${num2}`
    const correctAnswer = getGcd(num1, num2)

    if (checkAnswer(question, String(correctAnswer), i, name) === false) {
      return
    }
  }
}
