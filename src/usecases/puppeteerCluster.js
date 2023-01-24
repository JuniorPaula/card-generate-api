import { Cluster } from 'puppeteer-cluster'
import render from '../utils/render.js'
import createQueryStringFromObject from '../utils/createQueryString.js'
import logger from 'pino'

export class PuppeteerClusterUsecase {
  async execute(data) {
    const pid = process.pid

    try {
      const cluster = await Cluster.launch({
        concurrency: Cluster.CONCURRENCY_CONTEXT,
        maxConcurrency: 10,
      })

      await cluster.task(render)
      const links = []
      for (const item of data) {
        const qs = createQueryStringFromObject(item)
        const finalURI = `${process.env.BASE_URL}?${qs}`
        await cluster.queue({ finalURI, name: item.name })

        links.push({
          url: finalURI,
          name: item.name,
        })
      }
      await cluster.idle()
      await cluster.close()
      return links
    } catch (err) {
      logger().error(`${pid} has broken! ${err.stack}`)
    }
  }
}
