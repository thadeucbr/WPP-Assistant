import { assistant, openAI } from '../config/openAI.js';
import retrieveMessage from './retrieveMessage.js';

export default async function createMessage(threadId, incomingMessage, name, phone) {
  await openAI.beta.threads.messages.create(threadId, { 
    role: 'user',
    content: incomingMessage
  });

  const run = await openAI.beta.threads.runs.create(threadId, {
    assistant_id: assistant.id
  });
  
  let response = await openAI.beta.threads.runs.retrieve(threadId, run.id);
  while (response.status !== 'completed') {
    await new Promise(resolve => setTimeout(resolve, 3000));
    response = await retrieveMessage(threadId, run.id);
  }

  const messages = await openAI.beta.threads.messages.list(threadId);

  return messages.body.data[0].content;
}