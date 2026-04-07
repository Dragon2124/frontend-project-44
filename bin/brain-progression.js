import { getName } from '../src/cli.js'
import { progression } from '../src/functions.js'

function app() {
    console.log('Welcome to the Brain Games!')

    progression(getName())
}

app()