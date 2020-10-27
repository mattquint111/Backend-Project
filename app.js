// imported modules
const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const indexRoutes = require('./routes/index')

// middleware
app.use(express.urlencoded())
app.use('/css', express.static('css'))
app.use('/js', express.static('js'))
app.use(session({
    secret: "secret cat",
    resave: false,
    saveUninitialized: true
}))
app.use('/', indexRoutes)

// view engine (mustache)
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

// start server listening
app.listen(3000, () => {
    console.log("Server is running...")
})

