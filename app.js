const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')
const forecast = require('./src/utils/forecast')
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '/public')
const viewsPath = path.join(__dirname, '/templates/views')
const partialsPath = path.join(__dirname, '/templates/partials') 


app.use(express.static(publicDirectoryPath))
hbs.registerPartials(partialsPath) 
app.set('view engine', 'hbs') 
app.set('views',viewsPath)

app.get('', (req, res) => { 
    res.render('index', { 
        title: 'Weather Page',
        name: 'Ian Seidman'
    }) 
}) 

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'No se encontro la direccion'
        })
    }
    forecast(req.query.address, (error, data) => {
        res.send({ 
            data: data
        })
    })
})



app.get('*', (req, res) => { 
    res.render('404', { 
        title: '404', 
        name: 'Ian Seidman', 
        errorMessage: 'Page not found.' 
    }) 
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
