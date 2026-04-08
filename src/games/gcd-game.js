import checkAnswer from '../functions'
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
        if (checkAnswer(`${saveFNum} ${saveSNum}`, String(correctAnswer), i, name) === false) {
            return
        }
    }
}