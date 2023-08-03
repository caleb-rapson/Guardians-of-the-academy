import * as Path from 'node:path'
// import * as URL from 'node:url'

import express from 'express'
import hbs from 'express-handlebars'


const server = express()

// Server configuration
const publicFolder = Path.resolve('public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', Path.resolve('server/views'))

// Your routes/router(s) should go here

/// PSEUDO ///

// THREADS OBJECT (its monolith time, baybeeee!!)
    //  { id: NUMBER, title: STRING, comments: ARRAY[ {name: STRING, date: DATE OBJECT, comment: STRING} ]}


// HOME PAGE //
    // GET '/' 
        // HOME PAGE, button to go to threads.
        // BUTTON -> go to threads list ('/threads')
        // render('home') -- 'FIGMA SCREEN 1'

// THREADS ROUTER // 
    // GET '/threads'
        // List of all threads / topics
        // Clicking each thread will pass an ID that takes user to selected thread page (e.g threads/3)
            // READ FILE utility -> read from threads and map to list items with links to individual threads
            // OBJECT threads data
            // render('threads', data) -- 'FIGMA SCREEN 2' list of all the thread topics a user can choose from (EACH LOOP)

    // GET '/threads/:id'
        // on comment form submit, POST req with req.body to /threads/:id/add-comment vvvv
        // READ FILE utility -> read from singular thread and display comments
        // OBJECT contains information related to thread with "id"
        // render('thread-view', data) -- 'FIGMA SCREEN 3' list of all comments related to thread + form to add a comment (EACH LOOP)

    // POST '/threads/:id/add-comment' (POST ONLY, comment for a thread topic)
        // add comment to our 'db' or JSON
        // READ file
        // Find ID of thread user is adding a coment to
        // Create new comment object
        // push(newComment) to thread
        // write to file
        // redirect to /threads/:id on success
            // work with form 

// -STRETCH

// THREADS STRETCH
    // GET '/threads/new'
        // 

// .get('threads/new') -> new thread form
// .post('threads/new') -> post for new thread, redirects to new thread on success


export default server
