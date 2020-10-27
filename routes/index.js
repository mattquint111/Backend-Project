// imported modules
const express =  require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt')
const pgp = require('pg-promise')()
const connectionString = 'postgre://localhost:5432/backend-project'
const db = pgp(connectionString)

// middleware


// render homepage at localhost:3000
router.get('/', (req,res) => {
    res.render('index')
})

router.get('/register', (req,res) => {
    res.render('register')
})

router.post('/register', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword
    const userId = uuidv4()

    if (password === confirmPassword) {
        bcrypt.hash(password, 10, function(err, hash) {
            db.none('INSERT INTO users(username, password, user_id) VALUES($1,$2,$3)', [username, hash, userId])
                .then(() => {
                    res.render('home')
                })
                .catch(err => console.log(err))
        })
    }
})

router.post('/logIn', (req,res) => {
   
})




// exports index.js for app.js to use
module.exports = router;