import readlineSync from 'readline-sync'
export const prime = (name) => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
    for (let i = 0; i < 3; i++) {
        let number = Math.floor(Math.random() * (101 - 0) + 0) // NOSONAR
        let correctAnswer

        if (number !== 2) {
            if (number < 2 || number % 2 === 0) {
                correctAnswer = 'no'
            }
            else if (number % 2 !== 0 && number >= 3) {
                const sqrt = Math.floor(Math.sqrt(number))
                let j = 3
                while (3 <= j && j < sqrt) {
                    if (number % j === 0) {
                        correctAnswer = 'no'
                        break
                    }
                    else j += 2
                }
            }
        }
        console.log(`Question: ${number}`)
        const answer = readlineSync.question('Your answer:')
        if (answer === correctAnswer) {
            console.log('Correct!')
        } else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`)
        if (i === 2) {
            console.log(`Congratulations, ${name}!`)
        }
    }
}