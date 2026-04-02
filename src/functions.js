import readlineSync from 'readline-sync'

const question = (name) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')

    for (let i = 0; i < 3; i++) {
        let number = Math.floor(Math.random() * (100 - 1) + 1)
        let correctAnswer = 'yes'
        if (number % 2 === 0) {
            correctAnswer = 'yes'
        }
        else correctAnswer = 'no'

        console.log(`Question: ${number}`)
        const answer = readlineSync.question('Your answer: ')
        if (answer === correctAnswer) {
            console.log('Correct!')
        }
        else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet\'s try again, ${name}`)
        if (i === 2) { console.log(`Congratulations, ${name}`) }
    }
}

const calculate = (name) => {
    console.log('What is the result of the expression?')
    let operations = ['+', '-', '*']
    let correctAnswer
    for (let i = 0; i < 3; i++) {
        let firstNumber = Math.floor(Math.random() * (100 - 1) + 1)
        let secondNumber = Math.floor(Math.random() * (100 - 1) + 1)
        let randomOperations = operations[Math.floor(Math.random() * operations.length)]
        if (randomOperations === '+') {
            correctAnswer = correctAnswer = firstNumber + secondNumber
        } else if (randomOperations === '-') {
            correctAnswer = correctAnswer = firstNumber - secondNumber
        } else if (randomOperations === '*') {
            correctAnswer = correctAnswer = firstNumber * secondNumber
        }
        console.log(`Question: ${firstNumber} ${randomOperations} ${secondNumber}`)
        const answer = readlineSync.question('Your answer:')
        if (Number(answer) === correctAnswer) {
            console.log('Correct!')
        } else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`)
        if (i === 3) {
            console.log(console.log(`Congratulations, ${name}`))
        }
    }
}

const gcd = (name) => {

}
export { question, calculate }