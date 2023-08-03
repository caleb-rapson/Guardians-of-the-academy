import express from 'express';
import { read } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import Path from 'node:path';

const router = express.Router()
// router.get('/', (req, res) => {
//     res.render('home');
// });

// Home page

router.get('/', async (req, res) => {
    try {
        res.render('home')
    } catch (err) {
        res.send(`This page is not working. Error: ${err}`)
    }
})


// Thread homepage with all threads
router.get('/threads', async (req, res) => {
    try {
        res.render('home')
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