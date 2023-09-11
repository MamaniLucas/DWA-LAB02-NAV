const express = require('express')
const app = express()


app.get('/index', (req, res) => {
    res.sendFile('index.html', {
        root: __dirname + '/static'
    })
})
app.get('/about', (req, res) => { 
    res.sendFile('about.html', {
        root: __dirname + '/static'
    
    })
})
app.get('/contact', (req, res) => { 
    res.sendFile('contact.html', {
        root: __dirname + '/static'
    })
})


app.get('/route', (req, res) => {
    res.sendFile('./static/route.html', {
        root: __dirname
    })
})

app.use((req, res) => { 
    res.status(404).send('No se encontro tu pagina !!!')
})

app.listen(3000)
console.log(`server on port ${3000}`)