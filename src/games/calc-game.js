import readlineSync from 'readline-sync'
export const calculate = (name) => {

    console.log('What is the result of the expression?')

    let operations = ['+', '-', '*']
    for (let i = 0; i < 3; i++) {
        let firstNumber = Math.floor(Math.random() * (100 - 1) + 1) // NOSONAR
        let secondNumber = Math.floor(Math.random() * (100 - 1) + 1) // NOSONAR
        let randomOperations = operations[Math.floor(Math.random() * operations.length)]
        let correctAnswer
        if (randomOperations === '+') {
            correctAnswer = firstNumber + secondNumber
        } else if (randomOperations === '-') {
            correctAnswer = firstNumber - secondNumber
        } else if (randomOperations === '*') {
            correctAnswer = firstNumber * secondNumber
        }

        console.log(`Question: ${firstNumber} ${randomOperations} ${secondNumber}`)
        const answer = readlineSync.question('Your answer:')
        if (Number(answer) === correctAnswer) {
            console.log('Correct!')
        } else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`)
        if (i === 2) {
            console.log(`Congratulations, ${name}`)
        }
    }
}
