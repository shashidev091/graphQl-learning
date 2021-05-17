import express from 'express'
import Post from '../models/Post'

const router = express.Router();

router.get('/home', (req, res) => {
    res.send('We are at home')
})

router.post('/', (req, res) => {

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    // post.save().then(() => {
    //     res.send('data saved');
    // }).catch(() => {
    //     res.send("It failed ")
    // })

    post.save().then(data => {
        res.json(data)
    }).catch(err => {
        res.json({message : err})
    })
})

export default router;