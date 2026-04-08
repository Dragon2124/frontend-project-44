import readlineSync from 'readline-sync'
export const gcd = (name) => {
    console.log("Find the greatest common divisor of given numbers.")
    for (let i = 0; i < 3; i++) {

        let firstNumber = Math.floor(Math.random() * (100 - 1) + 1) // NOSONAR
        let secondNumber = Math.floor(Math.random() * (100 - 1) + 1) // NOSONAR

        console.log(`Question: ${firstNumber} ${secondNumber}`)

        let correctAnswer

        if (secondNumber !== 0) {
            while (secondNumber !== 0) {
                let saveNumber = secondNumber
                secondNumber = firstNumber % secondNumber
                firstNumber = saveNumber
            }
            correctAnswer = firstNumber
        }
        const answer = readlineSync.question('Your answer:')
        if (Number(answer) === correctAnswer) {
            console.log('Correct!')
        } else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`)
        if (i === 2) {
            console.log(`Congratulations, ${name}!`)
        }
    }
}