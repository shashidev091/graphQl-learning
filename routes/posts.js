import express from 'express'
import Post from '../models/Post'

const router = express.Router();

// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        res.json({message: error})
    }
})


// Save post
router.post('/', async (req, res) => {

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    // post.save().then(() => {
    //     res.send('data saved');
    // }).catch(() => {
    //     res.send("It failed ")
    // })

    try {
        const postSaved = await post.save()
        res.json(postSaved)
    } catch (error) {
        res.json({message: error})
    } 
})

// Get post by ID
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    } catch (error) {
        res.json({message: error})
    }
})

// Delete post by ID
router.delete('/:postId', async (req, res) => {
    try {
        const status = await Post.deleteOne({_id: req.params.postId});  
        if(status.deletedCount) {
            res.json({
                message: `Post with Id = ${req.params.postId} is deleted`
            })
        }
    } catch (error) {
        res.json({message: error})
    }
})

// Update post by Id
router.patch('/:postId', async (req, res) => {
    try {
        const status = await Post.updateOne(
            {_id: req.params.postId},
            {$set : {
                title: req.body.title
            }})
        res.json(status)
    } catch (error) {
        res.json({message: error})
    }
})

export default router;