import readlineSync from 'readline-sync'

export default function checkAnswer(question, correctAnswer, i, name) {
    console.log(`Question: ${question}`)
    const answer = readlineSync.question('Your answer:')
    if (answer === correctAnswer) {
        console.log('Correct!')
    }
    else if (answer !== correctAnswer) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`)
        return false
    }
    if (i === 2) {
        console.log(`Congratulations, ${name}!`)
    }
}