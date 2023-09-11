const express = require('express')
//importar body-parse
const bodyParser = require('body-parser');
const app = express()


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


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

app.post('/enviar', (req, res) => { 
    const email = req.body.email;
    const password = req.body.password;
    const verificado = req.body.verificado;

    res.send(`Datos recibidos: Email: ${email}, Contraseña: ${password}, Verificado: ${verificado}`);
})




app.listen(3000)
console.log(`server on port ${3000}`)