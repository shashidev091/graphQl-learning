import express from 'express'

const router = express.Router();

router.get('/home', (req, res) => {
    res.send('We are at home')
})

export default router;