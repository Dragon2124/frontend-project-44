import { getName } from '../src/cli.js'
import { prime } from '../src/functions.js'
function app() {
    console.log('Welcome to the Brain Games!')

    prime(getName())
}

app()