import checkAnswer from '../functions.js'

const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false
  }
  return true
}

export const prime = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1

    const correctAnswer = isPrime(number) ? 'yes' : 'no'

    if (checkAnswer(number, correctAnswer, i, name) === false) {
      return
    }
  }
}
