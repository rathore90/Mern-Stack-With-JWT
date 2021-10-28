import mongoose from 'mongoose';

// create moongose schema - each post will have to have these things
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt:{
    type: Date,
    default: new Date()
  }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;

