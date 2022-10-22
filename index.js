const express = require('express');
const courseRouter = require('./routes/course')
const db = require('./db')

// Create our app
const app = express();

const logger = (req, res, next) => {
    // Log the protocol (HTTP), host (127.0.0.1), and path
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    
    // Pass on to the next line 
    next();
}

// Make sure we are only accepting/outputting JSON
app.use(express.json())

// Add logger to be called before anything
app.use(logger);

// Bring in courseRouter
app.use('/course', courseRouter)

db.connectToServer()

// Listen on port 5000 - change this if you get an error "port already in use"
app.listen(5000, () => {
    console.log('Server is running on port 5000');
})