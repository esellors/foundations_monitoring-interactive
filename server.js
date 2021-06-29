const express = require('express');
const path = require('path');
const app = express();
const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: '7bca008bb8a24b7a8046eba88cde042c',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.use(express.json())


app.get('/', function(req, res) {
    rollbar.log('Hello World')
    res.sendFile(path.join(__dirname, '/public/index.html'))
})



const port = process.env.PORT || 4545;

app.listen(port, function() { 
    console.log(`Server jamming on ${port}`)
})