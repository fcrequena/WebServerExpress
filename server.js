const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//express HBS ENGINE
hbs.registerPartials(__dirname + '/views/parcials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'francisCO'
    });

})

app.get('/about', (req, res) => {
    res.render('about');
})

//app.get('/', (req, res) => {
//res.send('Hello World')
// let salida = {
//     nombre: 'francisco',
//     edad: 27,
//     url: req.url
// }
//res.send(salida);
//})

// app.get('/data', (req, res) => {
//     res.send('Hola data');
// })




app.listen(port, () => {
    console.log(`Escuchando peticiones en el puesto ${port}`)
});