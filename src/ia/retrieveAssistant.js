import { openAI } from '../config/openAI.js';

export default async function retrieveAssistant(assistantId) {
  const assistant = await openAI.beta.assistants.retrieve(assistantId)
  return assistant
}