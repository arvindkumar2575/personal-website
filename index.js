const express = require('express')
const app = express()
const path = require('path')
const dotenv = require('dotenv').config()
const port = process.env.PORT

//css,js,images files assets
app.use('/assets', express.static('assets'))

//ejs view
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//routes
app.get('/', (req, res) => {
    console.log(__dirname)
    res.render('index')
})

app.get('/about-us', (req, res) => {
    res.send('About Us')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})