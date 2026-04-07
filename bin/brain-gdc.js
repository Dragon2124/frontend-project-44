import { getName } from '../src/cli.js'
import { gdc } from '../src/functions.js'

function app() {
    console.log('Welcome to the Brain Games!')

    gdc(getName())
}

app()
