import findThreadService from '../service/findThread.service.js';
import mainAI from '../../skills/mainAI.js';

export default async function webhookController(req, res) { 
  try {
    const { notifyName, from, text, _to } = req.body.data;
    console.log('Hook!')
    const threadId = await findThreadService(from, notifyName)
    await mainAI(threadId, text, from, notifyName)
    res.status(200).end();
  } catch (error) {
    res.status(500).end()
  }
}