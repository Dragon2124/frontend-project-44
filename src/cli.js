import readlineSync from 'readline-sync'

const getName = () => {
  const gameName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${gameName}!`)
  return gameName
}

export { getName }