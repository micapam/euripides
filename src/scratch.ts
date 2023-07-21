import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

import 'dotenv/config'
import { Fountain } from 'fountain-js'

import { stripPipes } from './verse'

const { SCRIPT_SOURCE_DIR, VERSE_STRIP_PIPES } = process.env

const scriptSource = readdirSync(SCRIPT_SOURCE_DIR)
  .map(path => readFileSync(join(SCRIPT_SOURCE_DIR, path)))
  .join('\n')

const output = new Fountain().parse(stripPipes(scriptSource), true)

console.debug(JSON.stringify(output, null, 2))
