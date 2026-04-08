import readlineSync from 'readline-sync'
export const question = (name) => {

    console.log('Answer "yes" if the number is even, otherwise answer "no".')

    for (let i = 0; i < 3; i++) {

        let number = Math.floor(Math.random() * (100 - 1) + 1)
        let correctAnswer

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
        if (i === 2) { console.log(`Congratulations, ${name}!`) }
    }
}