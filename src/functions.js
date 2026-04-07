import readlineSync from 'readline-sync'

const checkAnswer = (name, correctAnswer) => {
    const answer = readlineSync.question('Your answer:')
    if (Number(answer) === correctAnswer) {
        console.log('Correct!')
    } else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`)
    if (i === 2) {
        console.log(`Congratulations, ${name}`)
    }
}
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

const gdc = (name) => {
    console.log("Find the greatest common divisor of given numbers.")
    for (let i = 0; i < 3; i++) {

        let firstNumber = Math.floor(Math.random() * (100 - 1) + 1)
        let secondNumber = Math.floor(Math.random() * (100 - 1) + 1)

        console.log(`Question: ${firstNumber} ${secondNumber}`)

        let correctAnswer = firstNumber

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
            console.log(`Congratulations, ${name}`)
        }
    }
}

const progression = (name) => {
    console.log('What number is missing in the progression?')
    let correctAnswer

    for (let i = 0; i < 3; i++) {

        let start = Math.floor(Math.random() * 11)
        let index = Math.floor(Math.random() * (6 - 1) + 1)
        let step = Math.floor(Math.random() * (6 - 1) + 1)
        let length = Math.floor(Math.random() * (11 - 5) + 5)
        let hiddenItem = Math.floor(Math.random() * (length - 0) + 0)

        const arr = []

        for (let j = 0; j < length; j++) {
            let curElement = start + index * step
            arr.push(curElement)
            index += step
        }
        correctAnswer = arr[hiddenItem]
        arr[hiddenItem] = '...'

        console.log(`Question: ${arr.join(' ')}`)
        const answer = readlineSync.question('Your answer:')
        if (Number(answer) === correctAnswer) {
            console.log('Correct!')
        } else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`)
        if (i === 2) {
            console.log(`Congratulations, ${name}`)
        }
    }
}

const prime = (name) => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
    for (let i = 0; i < 3; i++) {
        let number = Math.floor(Math.random() * (101 - 0) + 0)
        let correctAnswer = 'yes'

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
            console.log(`Congratulations, ${name}`)
        }
    }
}
export { question, calculate, gdc, progression, prime }