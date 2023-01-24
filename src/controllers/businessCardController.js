export class BusinessCardController {
  constructor(generateWorkersUsecase) {
    this.generateWorkersUsecase = generateWorkersUsecase
  }

  async handler(req, res) {
    try {
      const { data } = req.body

      await this.generateWorkersUsecase.exeute(data)

      return res.status(200).json({ success: 'OK' })
    } catch (error) {
      return res.status(500).json({ error })
    }
  }
}
