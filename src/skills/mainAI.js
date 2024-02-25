import createMessage from '../ia/createMessage.js'
import sendMessage from './sendMessage.js'
import contactOwner from './contactOwner.js'

export default async function mainAI(threadId, text, from, notifyName) {
  const aiContext = await createMessage(threadId, text, notifyName, from)
  console.log(aiContext)
  const aiResponse = JSON.parse(aiContext[0].text.value)

  if(aiResponse.sendMessage) {
    sendMessage(from, aiResponse.response)
  }
  if(aiResponse.contactOwner) {
    contactOwner(aiResponse.ownerMessage)
  }
  if(aiResponse.system === 'calendar') {
    return 'calendar'
  }
}