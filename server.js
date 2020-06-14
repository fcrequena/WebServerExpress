const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
//     //res.send('Hello World')
//     let salida = {
//         nombre: 'francisco',
//         edad: 27,
//         url: req.url
//     }
//     res.send(salida);
// })

// app.get('/data', (req, res) => {
//     res.send('Hola data');
// })

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puesto 3000')
});