import express from 'express';
import { read } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import Path from 'node:path';
import { getThreads } from '../utils.js'

const router = express.Router()

router.get('/', async (req, res) => {
    const data = await getThreads()
    const threadsArr = {threads: [...data.threads.map((thread) => {
        thread.comments = thread.comments.length
        return thread
    })]}
    console.log(threadsArr)
    res.render('threads', threadsArr)
})

// router.post() => {
    //read data
    //Thread = get thread by ID
    //Thread.comment.push(req.body.comment)
    //data.threads[id-1].comments.push(req.body.comment)
    //updateData(data)
//}

// threads = getThreads()
// const selectedThread = threads.threads.find(thread => thread.id === id)
const comment = {
    name: req.body.name,
    date: new Date().toJSON(),
    message : req.body.message
}
// selectedThread.comments.push(comment)
const threadsArr = {threads: [...data.threads.map((thread) => {
    thread.id === selectedId 
    ? {...thread, comments: []}
    return thread
})]}



export default router;