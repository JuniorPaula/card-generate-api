import * as url from 'url'
import cp from 'child_process'
import fs from 'fs'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
const modulePath = `${__dirname}/worker.js`

const loadJSON = (path) =>
  JSON.parse(fs.readFileSync(new URL(path, import.meta.url)))

const data = loadJSON('../resources/data.json')

;(async function main() {
  for (const item of data) {
    const worker = cp.fork(modulePath, [])
    worker.on('message', (msg) =>
      console.log(`message caught on parent ${msg}`),
    )
    worker.on('error', (msg) => console.log(`error caught on parent ${msg}`))

    worker.send(item)
  }
})()
