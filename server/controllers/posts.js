import PostMessage from "../models/postMessage.js";


// all the handler will be here
export const getPosts = async (req, res) => {
  try{
    const postMessage = await PostMessage.find();
    res.status(200).json(postMessage);
  }catch(error){
    res.status(404).json({message: error.message});
  }
}

export const createPost = (req, res) => {
  // post request, you will need 
  const body = req.body;
  const newPost = new PostMessage(post)
  try{
    await newPost.save();
    res.status(201).json(newPost);
  }catch(error){
    res.status(409).json({ message: error.message })
  }
}