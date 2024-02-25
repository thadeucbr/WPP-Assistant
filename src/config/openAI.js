import { OpenAI } from 'openai';

export const openAI = new OpenAI({
  apiKey: process.env.OPEN_API_KEY
});

export const assistant = await openAI.beta.assistants.retrieve(process.env.OPEN_API_ASSISTANT_ID)