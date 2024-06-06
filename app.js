const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/gil', (req, res) => {
    res.send('¡Hola Mundo gillll!');
});

app.get('/caca', (req, res) => {
    res.send('putooodsdsooooo holaa!');
});

app.get('/', (req, res) => {
    res.send('putoooooooo holaa!');
});

app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
