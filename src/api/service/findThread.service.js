import { User } from '../../database/model/userModel.js'
import createThread from '../../ia/createNewThread.js'
export default async function findThreadService(phoneNumber, name) {
  const userThread = await User.findOne({ contactPhone: phoneNumber })
  if (userThread?.id) {
    return userThread.threadId
  } else {
    const newThread = await createThread()
    const user = new User({
      contactPhone: phoneNumber,
      name,
      threadId: newThread
    })
    await user.save()
    return newThread
  }
}