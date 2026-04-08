import readlineSync from 'readline-sync'
export const progression = (name) => {
    console.log('What number is missing in the progression?')
    let correctAnswer

    for (let i = 0; i < 3; i++) {

        let start = Math.floor(Math.random() * 11) // NOSONAR
        let index = Math.floor(Math.random() * (6 - 1) + 1) // NOSONAR
        let step = Math.floor(Math.random() * (6 - 1) + 1) // NOSONAR
        let length = Math.floor(Math.random() * (11 - 5) + 5) // NOSONAR
        let hiddenItem = Math.floor(Math.random() * (length - 0) + 0) // NOSONAR

        const arr = []

        for (let j = 0; j < length; j++) {
            let curElement = start + index * step
            arr.push(curElement)
            index += step
        }
        correctAnswer = arr[hiddenItem]
        arr[hiddenItem] = '..'

        console.log(`Question: ${arr.join(' ')}`)
        const answer = readlineSync.question('Your answer:')
        if (Number(answer) === correctAnswer) {
            console.log('Correct!')
        } else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`)
        if (i === 2) {
            console.log(`Congratulations, ${name}!`)
        }
    }
}