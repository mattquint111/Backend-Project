// modules
const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const bodyParser = require('body-parser')

// middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use('/css', express.static('css'))
app.use('/js', express.static('js'))
app.use(session({
    secret: "secret cat",
    resave: false,
    saveUninitialized: true
}))

// view engine (mustache)
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

// start server listening
app.listen(3000, () => {
    console.log("Server is running...")
})

app.get('/', (req,res) => {
    res.render('index')
})