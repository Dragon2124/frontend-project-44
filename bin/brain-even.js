#!/usr/bin/env node
import { getName } from '../src/cli.js'
import { question } from '../src/functions.js'

function app() {
  console.log('Welcome to the Brain Games!')

  question(getName())
}

app()