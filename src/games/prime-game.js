import checkAnswer from '../functions.js'
export const prime = (name) => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
    for (let i = 0; i < 3; i++) {
        let number = Math.floor(Math.random() * (101 - 0) + 0)
        let correctAnswer = 'yes'
        if (number !== 2) {
            if (number < 2 || number % 2 === 0) {
                correctAnswer = 'no'
            }
            else if (number % 2 !== 0 && number >= 3) {
                const sqrt = Math.floor(Math.sqrt(number))
                for (let j = 3; j <= sqrt; j += 2) {
                    if (number % j === 0) {
                        correctAnswer = 'no'
                    }
                }
            }
        }

        if (checkAnswer(number, correctAnswer, i, name) === false) {
            return
        }
    }
}