import express from 'express';
import { read } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import Path from 'node:path';

const router = express.Router()
// router.get('/', (req, res) => {
//     res.render('home');
// });

router.get('/', async (req, res) => {
    try {
        res.render('home')
    } catch (err) {
        res.send(`This page is not working. Error: ${err}`)
    }
})



export default router;