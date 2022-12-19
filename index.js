const express = require('express')
const app = express()
const path = require('path')
const {dbjson} = require('./src/data')
const port = process.env.PORT || 8080

//css,js,images files assets
app.use('/assets', express.static('assets'))

//ejs view
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//routes
app.get('/', (req, res) => {
    // console.log(dbjson)
    let data = {};
    data.title=dbjson.title
    data.skills=dbjson.skills
    res.render('index',{'data':data})
})

app.get('/about-us', (req, res) => {
    res.send('About Us')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})