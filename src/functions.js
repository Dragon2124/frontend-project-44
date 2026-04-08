import readlineSync from 'readline-sync'
export default function checkAnswer(name, correctAnswer) {
    const answer = readlineSync.question('Your answer:')
    if (Number(answer) === correctAnswer) {
        console.log('Correct!')
    } else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`)
    if (i === 2) {
        console.log(`Congratulations, ${name}`)
    }
}









