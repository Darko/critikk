import mongoose from 'mongoose';
import constants from '../constants/index';

const { Schema } = mongoose;

const schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  avatar: { type: String },
  providers: [{
    provider: { type: String, enum: ['github', 'twitter'] },
    providerId: { type: String }
  }],
  title: { type: String, max: 140 },
  accessToken: { type: String, required: true },
  role: { type: String, enum: constants.user.roles, default: 'user' }
}, { versionKey: false, timestamps: true });

export default mongoose.model('User', schema);
