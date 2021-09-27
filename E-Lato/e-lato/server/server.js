if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/users");
const app = express();
const server = require('http').createServer(app)
const PORT = 8080;
const io = require('socket.io')(server);

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});




app.get('/', (req, res) => {
    res.send("welcome")
})

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


