import { openAI } from '../config/openAI.js';

export default async function createThread() {
  const thread = await openAI.beta.threads.create()
  return thread.id
}