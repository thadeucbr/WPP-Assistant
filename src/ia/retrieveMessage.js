import { openAI } from '../config/openAI.js';
export default async function retrieveMessage(threadId, runId) {
  await new Promise(resolve => setTimeout(resolve, 3000));
  console.log('Entrou aqui')
  return await openAI.beta.threads.runs.retrieve(threadId, runId);
}