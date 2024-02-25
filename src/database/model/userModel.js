import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  contactPhone: String,
  threadId: String
});

export const User = mongoose.model('User', userSchema);
