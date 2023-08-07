import PostMessage from '../models/PostMassage.js';
export const getPost = async (req, res) => {
    try {
        const postMesaege = await PostMessage.find();

        res.status(200).json(postMesaege);
    } catch (error) {
        res.status(404).json({message: error.message}); 
    }
}

export const createPost = (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);

    try {
        newPost.save();
        res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json({message: error.message}); 
    }
}