const express = require('express');
const socket = require('socket.io');

// app setup
const app = express();
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log(`listening on ${port}`);
});

// static files
app.use(express.static('client'));

// socket setup
const io = socket(server);

io.on('connection', (socket) => {
    console.log("Connected with id: " + socket.id);

    socket.on('content', (data) => {
        socket.broadcast.emit('content', data);
    });
});