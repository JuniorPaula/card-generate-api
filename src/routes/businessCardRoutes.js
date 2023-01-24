import { Router } from 'express'
import { BusinessCardController } from '../controllers/businessCardController.js'

const router = Router()

const businessCardController = new BusinessCardController()

router.post('/generate', businessCardController.handler)

export default router
