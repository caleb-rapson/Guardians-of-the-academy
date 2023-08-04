import express from 'express';
import { getThreads, updateData} from '../utils.js'

const router = express.Router()

router.get('/', async (req, res) => {

    const data = await getThreads()
    const threadsArr = {threads: [...data.threads.map((thread) => {
        thread.comments = thread.comments.length
        return thread
    })]}
    res.render('threads', threadsArr)
})

router.post('/:id/addcomment', async (req, res) =>{
    const id = Number(req.params.id)
    const data = await getThreads()
    const selectedThread = data.threads.find(thread => thread.id === id)
    const comment = {
        name: req.body.name,
        date: new Date().toJSON(),
        message: req.body.comment
    }
    selectedThread.comments.push(comment)
    // Potential solution using "splice"
    data.threads.splice(selectedThread.id -1, 1, selectedThread)
    updateData(data)
    
    res.redirect(`/threads/${id}`)
})

// Thread homepage with all threads
router.get('/:id', async (req, res) => {
    try {
        const data = await getThreads()
        const id = Number(req.params.id)
        // getThreads()

        const findThread = data.threads.find(element => element.id === id)
        res.render('uniqthread', findThread)
    } catch (err) {
        res.send(`This page is not working. Error: ${err}`)
    }
})


// Unique thread
// router.get('/threads/:id', async (req, res) => {
//     try {
//         res.render('home')
//     } catch (err) {
//         res.send(`This page is not working. Error: ${err}`)
//     }
// })

export default router;