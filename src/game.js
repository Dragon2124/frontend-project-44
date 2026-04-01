import readlineSync from 'readline-sync'
import { mainName } from './cli.js'

export const even = () => {
    const name = mainName
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log(`Question: ${randomNumber}`)
        const firstAnswer = readlineSync.question(`Your answer: `)
        if (randomNumber % 2 === 0 && firstAnswer === 'yes') {
            console.log('Correct!')
        }
        else {
            console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. \n Let's try again, ${name()}!`)
        }
        if (randomNumber % 2 === 1 && firstAnswer === 'no') {
            console.log('Correct!')
        }
        else {
            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. \n Let's try again,  ${name()}!`)
        }
    }
}