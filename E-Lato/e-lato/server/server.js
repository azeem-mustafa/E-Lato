const express = require("express")
const app = express()
const cors = require("cors")
const bcrypt = require('bcrypt')
const initializePassport = require('./passport/passportConfig')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverrride = require('method-override')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
// const io = require('socket.io')(5000, {cors: {origin: "*"}})


initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)
//local variable for storing users locally, change to sql if you have time

const users = []

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverrride('_method'))

app.get('/', checkAuthenticated, (req, res) => {
    res.render('index.ejs', { name: req.user.name})
})

app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login.ejs')
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',


}))

app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register.ejs')
})

app.post('/register', checkNotAuthenticated, async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')

    } catch {
        res.redirect('/register')

    }

})

app.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
})

function checkAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/login')

}

function checkNotAuthenticated(req, res, next){
    if (req.isAuthenticated()){
        return res.redirect('/')
    }
    next()
}
// const PORT = process.env.PORT 

// app.use(cors())
// app.use(express.json())

// app.get('/', (req, res) => {
//     res.send("welcome")
// })

// io.on('connection', socket => {
//     const id = socket.handshake.query.id 
//     socket.join(id)

//     socket.on('send-message', ({ recipients, text }) => {
//         recipients.forEach(recipient => {
//             const newRecipient = recipients.filter( r => r !== recipient)

//             newRecipient.push(id)
//             socket.broadcast.to(recipient).emit('recieve-message', {
//                 recipients: newRecipient, sender: id, text
//             })
//         })
//     }) 
// })


app.listen(3000)