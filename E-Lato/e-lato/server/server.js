if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/users");
const app = require('express')();
app.use(cors());
app.use(express.json());
const http = require('http').Server(app);

const io = require("socket.io")(http, { cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] } });
const PORT = process.env.PORT || 8080;

app.use("/api/users", userRoutes);

app.get('/', (req, res) => {
  res.send("welcome")
})

io.on('connection', socket => {
  const id = socket.handshake.query.id
  console.log(socket)
  socket.join(id)

  socket.on('send-message', ({ recipients, text }) => {
    recipients.forEach(recipient => {
      const newRecipients = recipients.filter(r => r !== recipient)
      newRecipients.push(id)
      socket.broadcast.to(recipient).emit('receive-message', {
        recipients: newRecipients, sender: id, text

      })
    })
  })
})

http.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});