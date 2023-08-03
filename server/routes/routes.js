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


export default router;