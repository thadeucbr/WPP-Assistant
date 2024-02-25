import { Router } from 'express'
import webhookController from '../controller/webhook.controller.js'

const webhookRouter = Router()

webhookRouter.post('/', webhookController)

export default webhookRouter