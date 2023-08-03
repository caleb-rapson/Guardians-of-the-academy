import express from 'express';
import { read } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import Path from 'node:path';
import { getThreads } from '../utils.js'
import server from '../server.js'

const router = express.Router()
server.get('/', async (req, res) => {
    const data = await getThreads()
    const threadsArr = data.threads.map((thread) => {
        thread.comments = thread.comments.length
        return thread
    })
    res.render('threads', threadsArr)
})


export default router;