import express from 'express';
import { read } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import Path from 'node:path';
import { getThreads } from '../utils.js';

const router = express.Router()
// router.get('/', (req, res) => {
//     res.render('home');
// });

// Home page


router.get('/', async (req, res) => {
    try {
        const data = await getThreads()
        res.render('home')
    } catch (err) {
        res.send(`This page is not working. Error: ${err}`)
    }
})


// Thread homepage with all threads
router.get('/threads/:id', async (req, res) => {
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