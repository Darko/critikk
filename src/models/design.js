import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', index: true },
  title: { type: String, required: true },
  description: { type: String },
  type: { type: String, enum: ['design', 'code'] },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  url: { type: String }
}, { versionKey: false, timestamps: true });

export default mongoose.model('Design', schema);
