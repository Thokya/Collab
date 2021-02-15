// making connection
const socket = io.connect(`http://localhost:4000`);

// querying the dom
let output = document.getElementById('output');

// emit event
// setTimeout(output.addEventListener('keyup', () => {
//     // console.log("event");
//     socket.emit('content', {
//         docs: output.innerHTML
//     });
// }), 1000);

output.addEventListener('keyup', () => {
    // console.log("event");
    socket.emit('content', {
        docs: output.innerHTML
    });
});



// listen for events
// socket.on('typed-data', (data) => {
//     // output.innerHTML += '<p>' + data.value + '</p>';
//     // output.innerHTML += data.docs;
//     data.docs;
//     // console.log(data.docs);
// });

socket.on('content', (data) => {
    output.innerHTML = data.docs;
    console.log(data.docs);
});