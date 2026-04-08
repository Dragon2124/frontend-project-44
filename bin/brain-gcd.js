#!/usr/bin/env node
import { getName } from '../src/cli.js'
import { gcd } from '../src/games/gcd-game.js'
function app() {
    console.log('Welcome to the Brain Games!')
    gcd(getName())
}
app()
