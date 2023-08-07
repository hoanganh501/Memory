import express  from "express";
import { getPost, createPost } from '../controllers/posts.js';

const router = express.Router();
// router.use('/',newsController.index);

router.use('/', getPost);
router.use('/', createPost);

export default router; 
