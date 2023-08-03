import { readFile } from 'node:fs/promises'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const DATA_LOCATION = path.resolve(__dirname + '/data/data.json')

export async function getThreads() {
  const data = await readFile(DATA_LOCATION, 'utf-8')
  return await JSON.parse(data)
}
