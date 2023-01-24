import * as url from 'url'
import cp from 'child_process'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
const modulePath = `${__dirname}/workerUsecase.js`

export class GenerateWorkersUsecase {
  async execute(data) {
    for (const item of data) {
      const worker = cp.fork(modulePath, [])
      worker.on('message', (msg) =>
        console.log(`message caught on parent ${msg}`),
      )
      worker.on('error', (msg) => console.log(`error caught on parent ${msg}`))

      worker.send(item)
    }
  }
}
