import { getName } from '../src/cli.js'
import { gcd } from '../src/functions.js'

function app() {
    console.log('Welcome to the Brain Games!')

    gcd(getName())
}

app()
