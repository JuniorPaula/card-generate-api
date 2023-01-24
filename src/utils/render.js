import * as url from 'url'
import { v1 } from 'uuid'
import { join } from 'path'

export default async function render({ page, data: { finalURI, name } }) {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

  const output = join(__dirname, `./../../output/${name}-${v1()}.pdf`)
  await page.goto(finalURI, { waitUntil: 'networkidle2' })

  await page.pdf({
    path: output,
    format: 'A4',
    landscape: true,
    printBackground: true,
  })

  console.log('ended', output)
}
