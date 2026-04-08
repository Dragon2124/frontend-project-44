#!/usr/bin/env node
import { getName } from '../src/cli.js'
import { calculate } from '../src/games/calc-game.js'
function app() {
    console.log('Welcome to the Brain Games!')
    calculate(getName())
}
app()