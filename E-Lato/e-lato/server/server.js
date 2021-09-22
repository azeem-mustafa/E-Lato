// const express = require("express")
// const app = express()
// const cors = require("cors")
const io = require('socket.io')(5000, {cors: {origin: "*"}})

// const PORT = process.env.PORT 

// app.use(cors())
// app.use(express.json())

// app.get('/', (req, res) => {
//     res.send("welcome")
// })

io.on('connection', socket => {
    const id = socket.handshake.query.id 
    socket.join(id)

    socket.on('send-message', ({ recipients, text }) => {
        recipients.forEach(recipient => {
            const newRecipient = recipients.filter( r => r !== recipient)

            newRecipient.push(id)
            socket.broadcast.to(recipient).emit('recieve-message', {
                recipients: newRecipient, sender: id, text
            })
        })
    }) 
})


// app.listen(PORT, () => {
//     console.log(`Server running on ${PORT}`);
//   });