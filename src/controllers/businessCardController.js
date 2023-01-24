import { PuppeteerClusterUsecase } from '../usecases/puppeteerCluster.js'

export class BusinessCardController {
  async handler(req, res) {
    try {
      const { data } = req.body

      const puppeteerCluster = new PuppeteerClusterUsecase()
      const links = await puppeteerCluster.execute(data)

      return res.status(200).json(links)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error })
    }
  }
}
