import { Router } from 'express';
import webhookRouter from './webhook.routes.js';

const router = Router()

router.use('/webhook', webhookRouter)

export default router