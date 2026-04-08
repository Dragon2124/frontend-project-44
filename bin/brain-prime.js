import { getName } from '../src/cli.js'
import { prime } from '../src/games/prime-game.js'
function app() {
    console.log('Welcome to the Brain Games!')

    prime(getName())
}

app()