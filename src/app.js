const path = require('path')
const express = require('express')
const hbs = require('hbs')

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

const app = express()

const port = process.env.PORT || 3000

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index',{
        title:'Hello',
    })
})

app.get('/about', (req, res) => {
    res.render('about',{
        title:'About',
    })
})

app.get('/projects', (req, res) => {
    res.render('projects',{
        title:'Projects',
        content: 'Some content here'
    })
})

app.get('/blog', (req, res) => {
    res.render('blog',{
        title:'Blog',
        content: '<h1>Some content here</h1>'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})