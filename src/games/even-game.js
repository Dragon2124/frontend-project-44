import checkAnswer from '../functions.js'
export const question = (name) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    for (let i = 0; i < 3; i++) {
        let number = Math.floor(Math.random() * (100 - 1) + 1) // NOSONAR
        let correctAnswer
        if (number % 2 !== 0) {
            correctAnswer = 'no'
        }
        else correctAnswer = 'yes'
        if (checkAnswer(number, correctAnswer, i, name) === false) {
            return
        }
    }
}
