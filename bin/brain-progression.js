import { getName } from '../src/cli.js'
import { progression } from '../src/games/progression-game.js'

function app() {
    console.log('Welcome to the Brain Games!')

    progression(getName())
}

app()